require('cls-hooked').createNamespace('correlation_id'); // We don't store inside a const because we just setup the namespace first of all
const logger = require(`../app-core/logger/logger`)(module.filename);
const appConfig = require(`./config/appConfig`);

const express = require(`express`);
const { BasicPullStoreCollection, SequencePullStoreCollection } = require('./models/models');
const {
  preRequestMiddleWares: corePreRequestMiddleWares,
  postRequestMiddleWares: corePostRequestMiddleWares,
} = require('../app-core/middleWares/middleWares');
const { preRequestMiddleWares } = require('./middlewares/middlewares');
const { dbStart } = require('../app-core/database/dbStart');
const HttpError = require('../app-core/httpErrors/httpErrorClass');

logger.info(`Setting up Express server`);
const app = express();

app.use(corePreRequestMiddleWares, preRequestMiddleWares);

app.use(
  appConfig.acceptedEndpoints.map((endpoint) => {
    logger.info(`Registering ${endpoint} routes`);
    if (endpoint === 'sequence') return new SequencePullStoreCollection().router;
    else return new BasicPullStoreCollection(endpoint).router;
  })
);

app.use(corePostRequestMiddleWares);

const startServer = async () => {
  logger.info(`Starting the server`);
  try {
    logger.info(`Starting the database`);
    await dbStart();
    logger.info(`Database started`);
    logger.info(`Starting the web server`);
    app.listen(appConfig.api.localPort, () => {
      logger.info(`Web server started and listening on port ${appConfig.api.localPort}`);
    });
  } catch (error) {
    logger.info(`Error starting the server`);
    logger.debug(`error : ${error}`);
    throw new HttpError('internalError', error.message, error.stack);
  }
};

startServer();
