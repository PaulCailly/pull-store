const HttpError = require('../../../../app-core/httpErrors/httpErrorClass');
const logger = require('../../../../app-core/logger/logger')(module.filename);
const { client } = require('../../../../app-core/database/mongoNative/dbStart');

const getAll = async (actualItem, limit, skip) => {
  let pluralActualItem = actualItem + 's';
  if (actualItem === 'source-entry') pluralActualItem = 'source-entries';
  try {
    logger.info(`Looking for all ${actualItem}s`);
    logger.debug(`Connection to mongodb`);

    const database = client.db();
    const items = database.collection(pluralActualItem);

    logger.debug(`Looking for all ${pluralActualItem} into the MongoDB`);

    const foundItems = await items.find().limit(limit).skip(skip).toArray();

    logger.debug(`Returning all ${pluralActualItem} we found`);
    logger.debug(`found ${pluralActualItem} : ${foundItems}`);

    if (foundItems.length <= 0)
      return {
        serviceReqMessage: `We don't find the ${pluralActualItem} you want to retrieve`,
        serviceReqCode: 0,
      };
    else
      return {
        serviceReqMessage: `${pluralActualItem} successfully retrieved`,
        serviceReqCode: 1,
        payload: foundItems,
      };
  } catch (error) {
    logger.error(`Something went wrong looking for all ${pluralActualItem} from the MongoDB`);
    logger.error(`error : ${error}`);
    throw new HttpError('internalError', error.message, error.stack);
  }
};

module.exports = getAll;
