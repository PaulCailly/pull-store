const { client } = require('../../../../app-core/database/mongoNative/dbStart');
const HttpError = require('../../../../app-core/httpErrors/httpErrorClass');
const logger = require('../../../../app-core/logger/logger')(module.filename);

const getNextValue = async (sequenceName, numberOfValues) => {
  try {
    logger.info(`Looking for the next value of a sequence`);
    logger.debug(`Connecting to the MongoDb`);

    const database = client.db();
    const items = database.collection('sequences');

    logger.debug(`Looking for the sequence next values into the MongoDB`);

    const foundItem = await items.findOneAndUpdate({ name: sequenceName }, [
      {
        $set: {
          nextValue: { $sum: ['$nextValue', { $multiply: ['$increment', numberOfValues] }] },
        },
      },
    ]);
    const sequence = foundItem.value;
    const nextValues = [];
    for (let i = 0; i < numberOfValues; i++) {
      nextValues.push({ nextValue: sequence.nextValue + i * sequence.increment });
    }
    logger.debug(`Returning the sequence next values we found`);
    logger.debug(`found sequence : ${foundItem}`);
    if (foundItem === null)
      return {
        serviceReqMessage: `The sequence next values you want to retrieve doesn't exist`,
        serviceReqCode: 0,
      };
    else
      return {
        serviceReqMessage: `sequence next values successfully retrieved`,
        serviceReqCode: 1,
        payload: nextValues,
      };
  } catch (error) {
    logger.error(`Something went wrong looking for the sequence next values from the MongoDB`);
    logger.error(`error : ${error}`);
    throw new HttpError('internalError', error.message, error.stack);
  }
};

module.exports = getNextValue;
