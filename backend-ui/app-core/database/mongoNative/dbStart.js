const { MongoClient } = require('mongodb');
const logger = require('../../logger/logger')(module.filename);
const appCoreConfig = require('../../config/appCoreConfig');
const HttpError = require('../../httpErrors/httpErrorClass');

// Create a new MongoClient
const client = new MongoClient(appCoreConfig.database.mongoDbUri);

const dbStart = async () => {
  logger.info(`Connecting to the MongoDB`);

  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db('admin').command({ ping: 1 });
    logger.info(`Connected to the MongoDB`);
  } catch (error) {
    logger.info(`Error connecting to the MongoDB`);
    logger.debug(`error : ${error}`);
    // Ensures that the client will close when you finish/error
    await client.close();
    throw new HttpError('internalError', error.message);
  }
};

module.exports = { dbStart, client };
