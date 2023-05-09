const mongodb = require('mongodb');

const { client } = require('../../../../app-core/database/mongoNative/dbStart');
const HttpError = require('../../../../app-core/httpErrors/httpErrorClass');
const logger = require('../../../../app-core/logger/logger')(module.filename);

const getById = async (actualItem, id) => {
  let pluralActualItem = actualItem + 's';
  if (actualItem === 'source-entry') pluralActualItem = 'source-entries';
  try {
    logger.info(`Looking for an ${actualItem}`);
    logger.debug(`The ${actualItem} to look for has _id ${id}`);
    logger.debug(`Connecting to the MongoDb`);

    // The name of the database we want to use is available to the client already
    // if passed into the connection string. It will be used if we do not provide
    // anything to the client.db(). In our case
    const database = client.db();
    const items = database.collection(pluralActualItem);

    logger.debug(`Looking for the ${actualItem} into the MongoDB`);

    const _id = new mongodb.ObjectId(id);
    const foundItem = await items.findOne({ _id });

    logger.debug(`Returning the ${actualItem} we found`);
    logger.debug(`found ${actualItem} : ${foundItem}`);
    if (foundItem === null)
      return {
        serviceReqMessage: `The ${actualItem} you want to retrieve doesn't exist`,
        serviceReqCode: 0,
      };
    else
      return {
        serviceReqMessage: `${actualItem} successfully retrieved`,
        serviceReqCode: 1,
        payload: foundItem,
      };
  } catch (error) {
    logger.error(
      `Something went wrong looking for the ${actualItem} with _id ${id} from the MongoDB`
    );
    logger.error(`error : ${error}`);
    throw new HttpError('internalError', error.message, error.stack);
  }
};

module.exports = getById;
