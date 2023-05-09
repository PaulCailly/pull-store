const axios = require('axios');
const qs = require('qs');

const { keycloakClientConfig, keycloakAuthConfig } = require('../../../config/appCoreConfig');
const logger = require('../../../logger/logger')(module.filename);

const url = `${keycloakClientConfig.serverUrl}/realms/${keycloakClientConfig.realm}/protocol/openid-connect/token`;

let _token = null;
let _exp = 0;
let _refreshToken = null;
let _refreshExp = 0;

const _isExpired = () => Date.now() > _exp;
const _isRefreshExpired = () => Date.now() > _refreshExp;

// Will authenticate to keycloak and return a token for the app user
const _authenticate = async () => {
  logger.info(`Renewing application token`);

  let request;

  if (_isRefreshExpired()) {
    logger.debug('Refresh token is expired, using password authentication');
    request = qs.stringify({
      grant_type: 'password',
      client_id: keycloakClientConfig.clientId,
      client_secret: keycloakClientConfig.credentials.secret,
      username: keycloakAuthConfig.username,
      password: keycloakAuthConfig.password,
    });
  } else {
    logger.debug('Refresh token valid, using refresh token authentication');
    request = qs.stringify({
      grant_type: 'refresh_token',
      client_id: keycloakClientConfig.clientId,
      client_secret: keycloakClientConfig.credentials.secret,
      refresh_token: _refreshToken,
    });
  }

  // Axios option object
  // Requests to keycloak server must be in application/x-www-form-urlencoded
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: request,
    url,
  };

  try {
    // Executing axios call
    const response = await axios(options);
    // Refreshing token
    _token = response.data.access_token;
    _exp = Date.now() + response.data.expires_in * 1000 - keycloakAuthConfig.tokenExpOffset;
    // Refreshing refresh token
    _refreshToken = response.data.refresh_token;
    _refreshExp =
      Date.now() + response.data.refresh_expires_in * 1000 - keycloakAuthConfig.tokenExpOffset;
    // Return the token
    return _token;
  } catch (error) {
    logger.error(`Something went wrong while getting data from the api: ${url}`);
    throw error;
  }
};

// appAuth will return the token, if expired will request another and return it
const appAuth = async () => (_isExpired() ? await _authenticate() : _token);

module.exports = appAuth;
