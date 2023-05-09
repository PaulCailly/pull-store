const moment = require('moment');
const mongodb = require('mongodb');

const { client } = require('../../../../app-core/database/mongoNative/dbStart');
const HttpError = require('../../../../app-core/httpErrors/httpErrorClass');
const logger = require('../../../../app-core/logger/logger')(module.filename);

const create = async (actualItem, itemData) => {
  let pluralActualItem = actualItem + 's';
  if (actualItem === 'source-entry') pluralActualItem = 'source-entries';
  const createdItems = [];
  const itemRequests = itemData.serviceReq;
  for (let i = 0; i < itemRequests.length; i++) {
    try {
      logger.info(`Creating a new ${actualItem}`);

      if (Array.isArray(itemRequests[i].payload))
        throw new HttpError('internalError', 'Wrong payload format, payload must be an object');

      const item = itemRequests[i].payload;

      const timeStamp = moment().format();
      const itemToCreate = {
        createdAt: timeStamp,
        updatedAt: timeStamp,
        ...item,
      };

      logger.debug(`The ${actualItem} to create is ${itemRequests[i]}`);
      logger.debug(`Connecting to the MongoDb`);

      const database = client.db();
      const items = database.collection(pluralActualItem);

      logger.debug(`Creating the ${actualItem} into the MongoDb`);

      const itemCreationResponse = await items.insertOne(itemToCreate);
      const _id = new mongodb.ObjectId(itemCreationResponse.insertedId);

      logger.debug(`Returning the ${actualItem} we created`);

      createdItems.push({
        serviceReqId: itemRequests[i].serviceReqId,
        serviceReqMessage: `${actualItem} successfully created`,
        serviceReqCode: 1,
        payload: { _id },
      });

      logger.debug(`created ${actualItem} : ${_id}`);
    } catch (error) {
      logger.error(`Something went wrong creating the ${actualItem}`);
      logger.error(`error : ${error}`);
      throw new HttpError('internalError', error.message, error.stack);
    }
  }
  return createdItems;
};

module.exports = create;
