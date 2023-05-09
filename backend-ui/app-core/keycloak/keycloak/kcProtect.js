const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const logger = require('../../logger/logger')(module.filename);
const HttpError = require('../../httpErrors/httpErrorClass');

const { keycloakClientConfig } = require('../../config/appCoreConfig');

const client = jwksClient({
  jwksUri: keycloakClientConfig.jwksEndpoint,
  requestHeaders: {
    'user-agent': 'Backend',
  },
});

const kcProtect = (callback = () => true) => {
  return (req, res, next) => {
    try {
      logger.debug('Reached kcProtect middleware');

      const bearerToken = req.get('Authorization');

      logger.debug('Retrieving token from headers');

      if (!bearerToken) throw new HttpError('forbidden', 'Bearer token not provided');

      const token = bearerToken.split(' ')[1];

      logger.debug('Token found:');
      logger.debug(token);

      logger.debug('Checking token validity');

      jwt.verify(
        token,
        (header, callback) => {
          logger.debug('Getting Keycloak public key for token validation.');
          logger.debug(`Using following kid: ${header.kid}`);

          client.getSigningKey(header.kid, function (err, key) {
            if (err)
              next(
                new HttpError('forbidden', `${err.name} unable to get private key: ${err.message}`)
              );

            const publicKey = key.getPublicKey();
            callback(null, publicKey);
          });
        },
        (err, decoded) => {
          if (err) next(new HttpError('forbidden', `Unable to verify token: ${err.message}`));

          if (callback(decoded, req)) next();
          else next(new HttpError('unauthorized'));
        }
      );
    } catch (error) {
      next(error);
    }
  };
};

module.exports = kcProtect;
