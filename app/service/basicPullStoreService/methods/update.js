const mongodb = require('mongodb');

const { client } = require('../../../../app-core/database/mongoNative/dbStart');
const HttpError = require('../../../../app-core/httpErrors/httpErrorClass');
const logger = require('../../../../app-core/logger/logger')(module.filename);

const update = async (actualItem, updateRequest) => {
  let pluralActualItem = actualItem + 's';
  if (actualItem === 'source-entry') pluralActualItem = 'source-entries';
  const itemId = updateRequest[0].payload._id;
  const updates = updateRequest[0].payload.updates;
  const serviceReqId = updateRequest[0].serviceReqId;
  try {
    const database = client.db();
    const items = database.collection(pluralActualItem);

    logger.info(`Updating ${actualItem}`);
    logger.debug(`${actualItem} to update have _id ${itemId}`);
    logger.debug(`Updating ${actualItem} from the MongoDB`);

    const { modifiedCount, matchedCount } = await items.updateOne(
      { _id: new mongodb.ObjectId(itemId) },
      { $set: updates }
    );

    logger.debug(`Database have updated : ${modifiedCount} ${actualItem}`);

    if (modifiedCount === 1) {
      return {
        serviceReqId,
        serviceReqMessage: 'Successfully updated',
        serviceReqCode: 1,
        payload: {
          _id: itemId,
        },
      };
    } else if (matchedCount === 1) {
      return {
        serviceReqId,
        serviceReqMessage: `Update failed but the ${actualItem} exists`,
        serviceReqCode: 0,
        payload: {
          _id: itemId,
        },
      };
    } else {
      return {
        serviceReqId,
        serviceReqMessage: `Update failed and the ${actualItem} does not exist`,
        serviceReqCode: 0,
        payload: {
          _id: itemId,
        },
      };
    }
  } catch (error) {
    logger.error(
      `Something went wrong updating the ${actualItem} with id ${itemId} from the MongoDB`
    );
    logger.error(error);
    throw new HttpError('internalError', error);
  }
};

module.exports = update;
