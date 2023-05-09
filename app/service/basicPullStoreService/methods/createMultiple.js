const moment = require('moment');
const mongodb = require('mongodb');

const { client } = require('../../../../app-core/database/mongoNative/dbStart');
const HttpError = require('../../../../app-core/httpErrors/httpErrorClass');
const logger = require('../../../../app-core/logger/logger')(module.filename);

const createMultiple = async (actualItem, itemData) => {
  let pluralActualItem = actualItem + 's';
  if (actualItem === 'source-entry') pluralActualItem = 'source-entries';
  const serviceResponses = [];
  const itemRequests = itemData.serviceReq;
  for (let i = 0; i < itemRequests.length; i++) {
    try {
      logger.info(`Creating new ${pluralActualItem}`);

      const itemsPayload = itemRequests[i].payload;
      const itemsToCreate = [];
      const timeStamp = moment().format();
      if (Array.isArray(itemsPayload)) {
        itemsPayload.forEach((itemPayload) => {
          itemsToCreate.push({
            createdAt: timeStamp,
            updatedAt: timeStamp,
            ...itemPayload,
          });
        });
      }

      logger.debug(`${pluralActualItem} to create are ${itemsToCreate}`);
      logger.debug(`Connecting to the MongoDb`);

      const database = client.db();
      const items = database.collection(pluralActualItem);

      logger.debug(`Creating ${pluralActualItem} into the MongoDb`);

      const itemCreationResponse = await items.insertMany(itemsToCreate);
      const createdItems = [];
      Object.entries(itemCreationResponse.insertedIds).every(([key, value]) => {
        createdItems.push({
          _id: new mongodb.ObjectId(value),
        });
        return true;
      });
      // const _id = new mongodb.ObjectId(itemCreationResponse.insertedId);

      logger.debug(`Returning ${pluralActualItem} we created`);

      // const createdItem = await items.findOne({ _id });
      serviceResponses.push({
        serviceReqId: itemRequests[i].serviceReqId,
        serviceReqMessage: `${pluralActualItem} successfully created`,
        serviceReqCode: 1,
        payload: createdItems,
      });

      logger.debug(`created ${pluralActualItem} : ${serviceResponses}`);
    } catch (error) {
      logger.error(`Something went wrong creating ${pluralActualItem}`);
      logger.error(`error : ${error}`);
      throw new HttpError('internalError', error.message, error.stack);
    }
  }
  return serviceResponses;
};

module.exports = createMultiple;
