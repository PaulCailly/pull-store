const errorHandler = require('./errorHandler/errorHandler');
const appCoreConfig = require('../../config/appCoreConfig');
const notFoundHandler = require('./notFoundHandler/notFoundHandler');

const postRequestMiddleWares = [];

const middleWaresConfig = appCoreConfig.middleWares;

if (middleWaresConfig.errorHandler.use) {
  postRequestMiddleWares.push(notFoundHandler);
  postRequestMiddleWares.push(errorHandler);
}

module.exports = postRequestMiddleWares;
