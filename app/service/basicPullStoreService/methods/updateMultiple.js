// const moment = require('moment');
const mongodb = require('mongodb');
const { v4: uuidv4 } = require('uuid');

const { client } = require('../../../../app-core/database/mongoNative/dbStart');
const HttpError = require('../../../../app-core/httpErrors/httpErrorClass');
const logger = require('../../../../app-core/logger/logger')(module.filename);

const updateMultiple = async (actualItem, serviceReq) => {
  const currentUuid = uuidv4();

  logger.trace(`${currentUuid} - Request: ${JSON.stringify(serviceReq, null, 4)}`);
  const serviceRes = [];
  const refactoredFilters = {};
  let pluralActualItem = actualItem + 's';
  if (actualItem === 'source-entry') pluralActualItem = 'source-entries';

  try {
    const database = client.db();
    const items = database.collection(pluralActualItem);

    for (let i = 0; i < serviceReq.length; i++) {
      // Set the filter on the right format
      const filter = serviceReq[i].payload.filter;
      Object.keys(filter).forEach((key) => {
        if (!isNaN(filter[key])) {
          filter[key] = Number.parseFloat(filter[key]);
        }
        if (Array.isArray(filter[key]) && key === '_id') {
          const ids = filter._id.map((id) => {
            return new mongodb.ObjectId(id);
          });
          refactoredFilters[key] = { $in: ids };
        } else if (Array.isArray(filter[key])) refactoredFilters[key] = { $in: filter[key] };
        else if (key === '_id') {
          const id = new mongodb.ObjectId(filter[key]);
          refactoredFilters[key] = id;
        } else refactoredFilters[key] = filter[key];
      });
      const serviceRequest = serviceReq[i];
      const payload = serviceRequest.payload;

      logger.info(`Updating ${pluralActualItem}`);
      logger.debug(`${pluralActualItem} to update have filter ${refactoredFilters}`);
      logger.debug(`Updating ${pluralActualItem} from the MongoDB`);

      logger.trace(
        `${currentUuid} - AppliedFilters: ${JSON.stringify(refactoredFilters, null, 4)}`
      );

      const updateMultipleResponse = await items.updateMany(refactoredFilters, {
        $set: payload.updates,
      });

      logger.trace(
        `${currentUuid} - UpdatedCount: ${updateMultipleResponse.modifiedCount} - ${JSON.stringify(
          updateMultipleResponse,
          null,
          4
        )}`
      );

      logger.debug(
        `Database have updated : ${updateMultipleResponse.modifiedCount} ${pluralActualItem}`
      );

      logger.debug(`Returning ${pluralActualItem} we updated`);
      let updateResponse;
      if (updateMultipleResponse.modifiedCount > 0) {
        logger.debug(`updated ${pluralActualItem} : ${refactoredFilters}`);
        updateResponse = {
          serviceReqId: serviceRequest.serviceReqId,
          serviceReqMessage: `${pluralActualItem} successfully updated`,
          serviceReqCode: 1,
          payload: {
            count: updateMultipleResponse.modifiedCount,
            appliedFilters: refactoredFilters,
            appliedUpdates: payload.updates,
          },
        };
        serviceRes.push(updateResponse);
      } else {
        logger.debug(`We couldn't modify ${pluralActualItem}`);
        updateResponse = {
          serviceReqId: serviceRequest.serviceReqId,
          serviceReqMessage: `We couldn't update ${pluralActualItem}`,
          serviceReqCode: 0,
          payload: {
            count: updateMultipleResponse.modifiedCount,
            appliedFilters: refactoredFilters,
            appliedUpdates: payload.updates,
          },
        };
        serviceRes.push(updateResponse);
      }
    }
    return serviceRes;
  } catch (error) {
    logger.error(
      `Something went wrong updating the ${pluralActualItem} with filter ${refactoredFilters} from the MongoDB`
    );
    logger.error(`error : ${error}`);
    throw new HttpError('internalError', error.message, error.stack);
  }
};

module.exports = updateMultiple;
