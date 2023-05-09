const path = require('path');

// General level information for this application
const general = {
  name: 'concreteasy-pull-store',
  description: 'Pull Store Microservice',
  appVersion: '1',
};

// The local server port this application is listening on. It can be different (and it usually is !) from the access URL port
const api = {
  localPort: process.env.LOCALPORT ?? 9003,
  appAccessUrlPort: process.env.APPACCESSURLPORT ?? `http://localhost:9003`,
};

const acceptedEndpoints = ['dispatch'];

const appCoreConfig = {
  api: {
    localPort: api.localPort,
    // This is the URL from which clients will connect to the application, including everything : protocol, subdomain, domain, path, port if any
    appAccessUrlPort: api.appAccessUrlPort,
  },

  database: {
    mongoDbUri: process.env.MONGODBURI ?? 'URI should be provided !',
  },

  // Swagger definitions for the /app related routes
  swaggerConfig: {
    info: {
      title: general.name,
      version: general.appVersion,
      description: general.description,
    },
    apis: [
      `${path.resolve(__dirname, '..', 'swagger')}/*.js`,
      `${path.resolve(__dirname, '..', 'swagger')}/validation/*.js`,
      `${path.resolve(__dirname, '..', 'swagger')}/sources/*.js`,
      `${path.resolve(__dirname, '..', 'swagger')}/sourceEntries/*.js`,
      `${path.resolve(__dirname, '..', 'swagger')}/invoiceSources/*.js`,
      `${path.resolve(__dirname, '..', 'swagger')}/invoices/*.js`,
      `${path.resolve(__dirname, '..', 'swagger')}/files/*.js`,
      `${path.resolve(__dirname, '..', 'swagger')}/products/*.js`,
      `${path.resolve(__dirname, '..', 'swagger')}/taxConfigs/*.js`,
    ],
    activeAppSwagger: true,
  },

  logger: {
    logLocation: process.env.LOGLOCATION
      ? path.resolve(process.env.LOGLOCATION)
      : path.resolve(__dirname, '..', '..', 'logs'),
    logLevel: process.env.LOGLEVEL ?? 'info',
    logFileSizeByte: process.env.LOGFILESIZEBYTE ?? 10000000,
  },

  helmet: {
    // We can here configure things from the app and push it to the core level
  },

  cors: {
    // We can here configure things from the app and push it to the core level
    requestOriginWhitelist: ['localhost:9003'],
  },

  middleWares: {
    accessLogger: {
      use: true,
    },
    helmet: {
      use: true,
    },
    cors: {
      use: true,
    },
    expressJson: {
      use: true,
      config: { limit: '200mb' },
    },
    errorHandler: {
      use: true,
    },
  },

  services: {
    implementation: 'mongoNative',
  },
};

const appConfig = {
  general,
  api,
  appCoreConfig,
  acceptedEndpoints,
};

module.exports = appConfig;
