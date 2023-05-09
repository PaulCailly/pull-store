const mongodb = require('mongodb');

const { client } = require('../../../../app-core/database/mongoNative/dbStart');
const HttpError = require('../../../../app-core/httpErrors/httpErrorClass');
const logger = require('../../../../app-core/logger/logger')(module.filename);

const deleteMultiple = async (actualItem, serviceReq) => {
  let pluralActualItem = actualItem + 's';
  if (actualItem === 'source-entry') pluralActualItem = 'source-entries';
  // if (actualItem.includes('-')) {
  //   const completeItemName = actualItem.split('-');
  //   const secondPart = completeItemName[1].charAt(0).toUpperCase() + completeItemName[1].slice(1);
  //   actualItem = completeItemName[0] + secondPart;
  // }
  let deletedItems = [];
  const refactoredFilters = {};
  const originFilter = serviceReq.payload.filter;
  try {
    // The name of the database we want to use is available to the client already
    // if passed into the connection string. It will be used if we do not provide
    // anything to the client.db(). In our case
    const database = client.db();
    const item = database.collection(pluralActualItem);

    // if (Object.keys(originFilter).length === 0)
    //   throw new HttpError('badRequest', 'You have to setup a filter in your request !');

    Object.keys(originFilter).forEach((key) => {
      if (!isNaN(originFilter[key])) {
        originFilter[key] = Number.parseFloat(originFilter[key]);
      }
      if (Array.isArray(originFilter[key]) && key === '_id') {
        const ids = originFilter._id.map((id) => {
          return new mongodb.ObjectId(id);
        });
        refactoredFilters[key] = { $in: ids };
      } else if (Array.isArray(originFilter[key]))
        refactoredFilters[key] = { $in: originFilter[key] };
      else if (key === '_id') {
        const id = new mongodb.ObjectId(originFilter[key]);
        refactoredFilters[key] = id;
      } else refactoredFilters[key] = originFilter[key];
    });

    logger.info(`Looking for deleting some ${pluralActualItem}`);
    logger.debug(`${pluralActualItem} to delete have filter: ${originFilter}`);
    logger.debug(`Connecting to the MongoDb`);

    // CHANGE THAT
    deletedItems = await item.deleteMany(refactoredFilters);

    logger.debug(`We deleted these ${pluralActualItem} on the MongoDb : ${deletedItems}`);
    if (deletedItems.deletedCount <= 0) {
      logger.debug(`Returning that we didn't find ${pluralActualItem} to delete`);
      const response = {
        serviceReqId: serviceReq.serviceReqId,
        serviceReqMessage: `We can't delete the ${pluralActualItem} you want to delete`,
        serviceReqCode: 0,
        payload: {
          count: deletedItems.deletedCount,
          filter: originFilter,
        },
      };
      return response;
    } else {
      logger.debug(`Returning ${pluralActualItem} we deleted`);
      const response = {
        serviceReqId: serviceReq.serviceReqId,
        serviceReqMessage: `${pluralActualItem} successfully deleted`,
        serviceReqCode: 1,
        payload: {
          count: deletedItems.deletedCount,
          filter: originFilter,
        },
      };
      return response;
    }
  } catch (error) {
    logger.error(
      `Something went wrong deleting ${pluralActualItem} that have filter: ${originFilter} from the MongoDB`
    );
    logger.error(`error : ${error}`);
    if (error.identifier === 'undefined')
      throw new HttpError('internalError', error.message, error.stack);
    else throw error;
  }
};

module.exports = deleteMultiple;
