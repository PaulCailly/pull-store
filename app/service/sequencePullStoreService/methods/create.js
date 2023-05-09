const moment = require('moment');
const mongodb = require('mongodb');

const { client } = require('../../../../app-core/database/mongoNative/dbStart');
const HttpError = require('../../../../app-core/httpErrors/httpErrorClass');
const logger = require('../../../../app-core/logger/logger')(module.filename);

const create = async (actualItem, itemData) => {
  const createdItems = [];
  const serviceReq = itemData.serviceReq;
  for (let i = 0; i < serviceReq.length; i++) {
    try {
      logger.info(`Creating a new sequence`);

      if (Array.isArray(serviceReq[i].payload))
        throw new HttpError('internalError', 'Wrong payload format, payload must be an object');

      const item = serviceReq[i].payload;
      const name = item.name;
      const increment = item.increment ? item.increment : 1;
      const startValue = item.startValue ? item.startValue : 0;

      const timeStamp = moment().format();
      const itemToCreate = {
        createdAt: timeStamp,
        updatedAt: timeStamp,
        name,
        increment,
        startValue,
        nextValue: startValue,
      };

      logger.debug(`The sequence to create is ${serviceReq[i]}`);
      logger.debug(`Connecting to the MongoDb`);

      const database = client.db();
      const items = database.collection('sequences');

      logger.debug(`Creating the sequence into the MongoDb`);

      const itemCreationResponse = await items.insertOne(itemToCreate);
      const _id = new mongodb.ObjectId(itemCreationResponse.insertedId);

      logger.debug(`Returning the sequence we created`);

      createdItems.push({
        serviceReqId: serviceReq[i].serviceReqId,
        serviceReqMessage: `sequence successfully created`,
        serviceReqCode: 1,
        payload: { _id },
      });

      logger.debug(`created sequence : ${_id}`);
    } catch (error) {
      logger.error(`Something went wrong creating the sequence`);
      logger.error(`error : ${error}`);
      throw new HttpError('internalError', error.message, error.stack);
    }
  }
  return createdItems;
};

module.exports = create;
