const path = require('path');
const appConfig = require('../../app/config/appConfig');

// General level information for this application
const generalAppConfig = appConfig.general;
const general = {
  name: 'node-micro-core',
  description: 'Node microservice core',
  appVersion: '1.0.0',
};

const apiAppConfig = appConfig.appCoreConfig.api;
const api = {
  localPort: apiAppConfig.localPort ? apiAppConfig.localPort : 9003,
  appAccessUrlPort: apiAppConfig.appAccessUrlPort
    ? apiAppConfig.appAccessUrlPort
    : `http://localhost:9003`,
};

const databaseAppConfig = appConfig.appCoreConfig.database;
const database = {
  mongoDbUri: databaseAppConfig.mongoDbUri
    ? databaseAppConfig.mongoDbUri
    : 'URI should be provided !',
  lowDbLocation: databaseAppConfig.lowDbLocation
    ? path.resolve(databaseAppConfig.lowDbLocation)
    : path.resolve(__dirname, '..', '..', 'lowDb'),
  lowDbFile: 'lowDb.json',
};

// This is the URL from which clients will connect to the application, including everything : protocol, subdomain, domain, path, port if any
const appAccessUrlPortParsed = new URL(api.appAccessUrlPort);

// Swagger definitions for the /app related routes
const swaggerAppConfig = appConfig.appCoreConfig.swaggerConfig;

// Define which routes add to swagger
const apis = swaggerAppConfig.apis;

const swaggerConfig = {
  definition: {
    openapi: `3.0.0`,
    info: {
      title: swaggerAppConfig.info.title ? swaggerAppConfig.info.title : general.title,
      version: swaggerAppConfig.info.version ? swaggerAppConfig.info.version : general.appVersion,
      description: swaggerAppConfig.info.description
        ? swaggerAppConfig.info.description
        : general.description,
    },
    servers: [
      {
        url: `${appAccessUrlPortParsed.protocol}//${appAccessUrlPortParsed.hostname}${
          appAccessUrlPortParsed.port ? ':' : ''
        }${appAccessUrlPortParsed.port}${appAccessUrlPortParsed.pathname}`,
      },
    ],
  },

  apis,
};

const loggerAppConfig = appConfig.appCoreConfig.logger;
const logger = {
  logLocation: loggerAppConfig.logLocation
    ? path.resolve(loggerAppConfig.logLocation)
    : path.resolve(__dirname, '..', '..', 'logs'),
  appLogFile: 'app.log',
  errorLogFile: 'error.log',
  accessLogFile: 'access.log',
  logLevel: loggerAppConfig.logLevel ? loggerAppConfig.logLevel.toLowerCase() : 'info',
  logFileSizeByte: loggerAppConfig.logFileSizeByte ? loggerAppConfig.logFileSizeByte : 10000000,
};

// const helmetAppConfig = appConfig.appCoreConfig.helmet
// const helmet = {
//   someConfigFromAppLevel = helmetAppConfig.someConfigFromAppLevel
//   someOtherConfigJustForCoreLevel = ...
// }

const corsAppConfig = appConfig.appCoreConfig.cors;
const cors = {
  requestOriginWhitelist: corsAppConfig.requestOriginWhitelist || [],
};

const servicesAppConfig = appConfig.appCoreConfig.services;
const services = {
  implementation: servicesAppConfig.implementation ? servicesAppConfig.implementation : 'lowDb',
};

const middleWaresAppConfig = appConfig.appCoreConfig.middleWares;
const middleWares = {
  accessLogger: {
    use: middleWaresAppConfig.accessLogger.use !== false,
  },
  helmet: {
    use: middleWaresAppConfig.helmet.use !== false,
  },
  cors: {
    use: middleWaresAppConfig.expressJson.use !== false,
  },
  expressJson: {
    use: middleWaresAppConfig.expressJson !== false,
    config: middleWaresAppConfig.expressJson.config ? middleWaresAppConfig.expressJson.config : {},
  },
  errorHandler: {
    use: middleWaresAppConfig.errorHandler !== false,
  },
};

const coreConfig = {
  generalAppConfig,
  general,
  api,
  database,
  swaggerConfig,
  logger,
  // helmet,
  cors,
  middleWares,
  services,
};

module.exports = coreConfig;
