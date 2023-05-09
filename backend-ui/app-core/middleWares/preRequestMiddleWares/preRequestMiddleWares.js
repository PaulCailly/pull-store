const logger = require('../../logger/logger')(module.filename);
const appCoreConfig = require('../../config/appCoreConfig');

const corsMiddleWare = require('./cors/corsMiddleWare');
const helmetMiddleWare = require('./helmet/helmetMiddleWare');
const expressJsonMiddleWare = require('./expressJson/expressJsonMiddleWare');
const accessLoggerMiddleWare = require('./accessLog/accessLogMiddleWare');
const setHeaderVariables = require('./headerConfig/setHeaderVariables');

const preRequestMiddleWares = [];

const middleWaresConfig = appCoreConfig.middleWares;

preRequestMiddleWares.push(setHeaderVariables);

if (middleWaresConfig.cors.use) {
  preRequestMiddleWares.push(corsMiddleWare);
  logger.info('Using corsMiddleWare from app-core');
}

if (middleWaresConfig.helmet.use) {
  preRequestMiddleWares.push(helmetMiddleWare);
  logger.info('Using helmetMiddleWare from app-core');
}

if (middleWaresConfig.expressJson.use) {
  preRequestMiddleWares.push(expressJsonMiddleWare);
  logger.info('Using expressJsonMiddleWare from app-core');
}

if (middleWaresConfig.accessLogger.use) {
  preRequestMiddleWares.push(accessLoggerMiddleWare);
  logger.info('Using accessLoggerMiddleWare from app-core');
}

module.exports = preRequestMiddleWares;
