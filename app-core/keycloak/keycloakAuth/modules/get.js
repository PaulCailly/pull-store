const kcAuth = require('./keycloakAuth');

/**
 * Axios middleware for accessing keycloak protected api endpoints - get method
 * @param {string} url                        - Request url
 * @param {object} options                    - Request options
 * @property {?object} options.data           - Optional Request body
 * @property {?object} options.headers        - Optional Request header
 * @property {?bool} options.microServiceAuth - Optional Should the microservice authenticate itself for this request
 * @property {?string} options.bearerToken    - Required if microServiceAuth is set to false or not provided - Keycloak Token to be used
 * @returns {AxiosPromise}
 */
const get = async (url, options = {}) =>
  await kcAuth(
    'GET',
    url,
    options.data ?? {},
    options.headers ?? {},
    options.microServiceAuth ?? false,
    options.bearerToken ?? false
  );

module.exports = get;
