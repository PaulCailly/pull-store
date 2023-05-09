const axios = require('axios');
const logger = require('../../../logger/logger')(module.filename);
const HttpError = require('../../../httpErrors/httpErrorClass');
const appAuth = require('./appAuth');

// Axios middleware for accessing keycloak protected api endpoints - general method
const keycloackAuth = async (method, url, data, headers, microServiceAuth, bearerToken) => {
  try {
    logger.info(`Sending ${method} request on ${url}`);

    if (microServiceAuth) {
      // If application authentication is asked, we get a token by calling appAuth
      bearerToken = `Bearer ${await appAuth()}`;
    } else {
      // If no bearerToken is detected and app authentication not asked, we throw an error
      if (!bearerToken) {
        logger.error('No bearer token provided and micro-service authentication is disabled');
        throw new HttpError(
          'badRequest',
          `Something went wrong while getting data from the api: ${url}`
        );
      }
    }

    // Generating options object to pass to axios
    const options = {
      method,
      headers: {
        ...headers,
        Authorization: bearerToken,
      },
      data,
      url,
    };

    // Do and return the axios call
    return await axios(options);
  } catch (error) {
    logger.error(error);
    throw new HttpError(
      'badRequest',
      `Something went wrong while getting data from the api: ${url}`
    );
  }
};

module.exports = keycloackAuth;
