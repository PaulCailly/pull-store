const HttpError = require('../../../../app-core/httpErrors/httpErrorClass');
const logger = require('../../../../app-core/logger/logger')(module.filename);
const { client } = require('../../../../app-core/database/mongoNative/dbStart');
const mongodb = require('mongodb');

const deleteById = async (actualItem, id) => {
  let pluralActualItem = actualItem + 's';
  if (actualItem === 'source-entry') pluralActualItem = 'source-entries';
  try {
    logger.info(`Looking for delete one ${actualItem} with id: ${id}`);
    logger.debug(`Connection to mongodb`);

    const database = client.db();
    const items = database.collection(pluralActualItem);
    const _id = new mongodb.ObjectId(id);

    logger.debug(`Looking for delete ${actualItem} with id ${id} into the MongoDB`);

    const deletedItem = await items.findOneAndDelete({ _id });

    logger.debug(`Deleted ${actualItem} : ${deletedItem.value}`);

    if (deletedItem.value == null) {
      return {
        message: `The ${actualItem} you want to delete doesn't exists in the DB`,
        code: 0,
      };
    } else {
      return {
        message: `${actualItem} have successfully been deleted`,
        code: 1,
        payload: {
          _id: deletedItem.value._id,
        },
      };
    }
  } catch (error) {
    logger.error(`Something went wrong deleting the ${actualItem} from the MongoDB`);
    logger.error(`error : ${error}`);
    throw new HttpError('internalError', error.message, error.stack);
  }
};

module.exports = deleteById;
