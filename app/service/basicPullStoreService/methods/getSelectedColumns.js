const { client } = require('../../../../app-core/database/mongoNative/dbStart');
const HttpError = require('../../../../app-core/httpErrors/httpErrorClass');
const logger = require('../../../../app-core/logger/logger')(module.filename);
const { getWithPagination } = require('../../functions/utils');

const getCustom = async (actualItem, serviceRequests) => {
  let pluralActualItem = actualItem + 's';
  if (actualItem === 'source-entry') pluralActualItem = 'source-entries';
  let foundItems = [];
  const serviceRes = [];

  try {
    for (const serviceReq of serviceRequests) {
      const database = client.db();
      const item = database.collection(pluralActualItem);

      const payload = serviceReq.payload;

      const pagination = payload.pagination ?? {};
      const { page, size, sort, filter } = getWithPagination(pagination);
      const columns = payload.columns;
      const refactoredColumns = {};

      columns.forEach((column) => {
        refactoredColumns[column] = 1;
      });

      logger.info(`Looking for some ${pluralActualItem}`);
      logger.debug(`${pluralActualItem} to look for ${filter}`);
      logger.debug(`Connecting to the MongoDb`);

      const count = await item.countDocuments(filter);

      const aggregationArray = [];

      if (Array.isArray(pagination.sort) && pagination.sort.length > 0)
        aggregationArray.push({ $sort: sort });

      aggregationArray.push({ $match: filter }, { $skip: page * size });

      if (size !== 0) aggregationArray.push({ $limit: size });

      if (columns.length > 0) aggregationArray.push({ $project: refactoredColumns });

      foundItems = await item.aggregate(aggregationArray).toArray();

      logger.debug(`We found these ${pluralActualItem} on the MongoDb : ${foundItems}`);
      if (foundItems.length <= 0) {
        logger.debug(`Returning that we didn't find ${pluralActualItem}`);
        serviceRes.push({
          serviceReqId: serviceReq.serviceReqId,
          serviceReqMessage: `We don't find the ${pluralActualItem} you want to retrieve`,
          serviceReqCode: 0,
          payload: {
            count,
            data: foundItems,
          },
        });
      } else {
        logger.debug(`Returning ${pluralActualItem} we found`);
        serviceRes.push({
          serviceReqId: serviceReq.serviceReqId,
          serviceReqMessage: `${pluralActualItem} successfully retrieved`,
          serviceReqCode: 1,
          payload: {
            count,
            data: foundItems,
          },
        });
      }
    }
    return serviceRes;
  } catch (error) {
    logger.error(`Something went wrong looking for the ${pluralActualItem} from the MongoDB`);
    logger.error(`error : ${error}`);
    throw new HttpError('internalError', error.message, error.stack);
  }
};

module.exports = getCustom;
