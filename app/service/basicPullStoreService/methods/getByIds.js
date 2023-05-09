const mongodb = require('mongodb');

const { client } = require('../../../../app-core/database/mongoNative/dbStart');
const HttpError = require('../../../../app-core/httpErrors/httpErrorClass');
const logger = require('../../../../app-core/logger/logger')(module.filename);
const { getWithPagination } = require('../../functions/utils');

const getByIds = async (actualItem, itemData) => {
  let pluralActualItem = actualItem + 's';
  if (actualItem === 'source-entry') pluralActualItem = 'source-entries';
  let foundItems = [];
  const itemIDs = [];
  try {
    // The name of the database we want to use is available to the client already
    // if passed into the connection string. It will be used if we do not provide
    // anything to the client.db(). In our case
    const database = client.db();
    const item = database.collection(pluralActualItem);

    const payload = itemData.serviceReq.payload;
    const pagination = payload.pagination ?? {};
    const { page, size, sort } = getWithPagination(pagination);
    const ids = payload.ids;

    if (Array.isArray(ids)) {
      ids.forEach((item) => {
        itemIDs.push(new mongodb.ObjectId(item._id));
      });
    }

    logger.info(`Looking for some ${pluralActualItem}`);
    logger.debug(`${pluralActualItem} to look for have _id ${itemIDs}`);
    logger.debug(`Connecting to the MongoDb`);

    const count = await item.countDocuments({ _id: { $in: itemIDs } });

    const aggregationArray = [{ $match: { _id: { $in: itemIDs } } }, { $skip: page * size }];

    if (Array.isArray(pagination.sort) && pagination.sort.length > 0)
      aggregationArray.push({ $sort: sort });

    if (size !== 0) aggregationArray.push({ $limit: size });

    foundItems = await item.aggregate(aggregationArray).toArray();

    logger.debug(`We found these ${pluralActualItem} on the MongoDb : ${foundItems}`);
    if (foundItems.length <= 0) {
      logger.debug(`Returning that we didn't find ${pluralActualItem}`);
      return {
        serviceReqId: itemData.serviceReq.serviceReqId,
        serviceReqMessage: `We don't find the ${pluralActualItem} you want to retrieve`,
        serviceReqCode: 0,
      };
    } else if (foundItems.length < itemIDs.length) {
      logger.debug(`Returning the some ${pluralActualItem} are missing`);
      return {
        serviceReqId: itemData.serviceReq.serviceReqId,
        serviceReqMessage: `Some ${pluralActualItem} have not been retrieved`,
        serviceReqCode: 0,
        payload: { count, data: foundItems },
      };
    } else {
      logger.debug(`Returning ${pluralActualItem} we found`);
      return {
        serviceReqId: itemData.serviceReq.serviceReqId,
        serviceReqMessage: `${pluralActualItem} successfully retrieved`,
        serviceReqCode: 1,
        payload: { count, data: foundItems },
      };
    }
  } catch (error) {
    logger.error(
      `Something went wrong looking for the ${pluralActualItem} with _id ${itemIDs} from the MongoDB`
    );
    logger.error(`error : ${error}`);
    throw new HttpError('internalError', error.message, error.stack);
  }
};

module.exports = getByIds;
