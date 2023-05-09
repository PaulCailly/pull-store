require('cls-hooked').createNamespace('correlation_id'); // We don't store inside a const because we just setup the namespace first of all
const logger = require(`../app-core/logger/logger`)(module.filename);
const appConfig = require(`./config/appConfig`);

const express = require(`express`);
const {
  preRequestMiddleWares,
  postRequestMiddleWares,
} = require('../app-core/middleWares/middleWares');

const myRoutes = require(`./routes/myRoutes`);
const validationRoutes = require(`./routes/validationRoutes`);
const keycloakRoutes = require(`./routes/keycloakRoutes`);

const HttpError = require('../app-core/httpErrors/httpErrorClass');

logger.info(`Setting up Express server`);
const app = express();

app.use(preRequestMiddleWares);

if (appConfig.featureSwitches.keycloak.enabled) {
  logger.info(`Registering keycloak routes`);
  app.use(keycloakRoutes);
}

if (appConfig.featureSwitches.validation) {
  logger.info(`Registering validation routes`);
  app.use(validationRoutes);
}

logger.info(`Registering my routes`);
app.use(myRoutes);

app.use(postRequestMiddleWares);

const startServer = async () => {
  logger.info(`Starting the server`);
  try {
    logger.info(`Starting the web server`);
    app.listen(appConfig.api.localPort, () => {
      logger.info(`Web server started and listening on port ${appConfig.api.localPort}`);
    });
  } catch (error) {
    logger.info(`Error starting the server`);
    throw new HttpError('internalError', error.message, error.stack);
  }
};

startServer();
