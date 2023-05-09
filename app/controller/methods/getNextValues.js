const logger = require('../../../app-core/logger/logger')(module.filename);
const getService = require('../../service/service');
const { checkResponsesStatusCodes } = require('../../../app-core/functions/checkingMethods');

const getNextValues = async (req, res, next) => {
  logger.info(`GET ${req.url}`);
  logger.debug(`req.query : ${JSON.stringify(req.query, null, 4)}`);
  logger.debug(`req.params : ${JSON.stringify(req.params, null, 4)}`);

  try {
    const service = getService(req.headers.actualItem);
    const sequenceName = req.query.sequenceName;
    const numberOfValues = req.query.numberOfValues ? Number.parseInt(req.query.numberOfValues) : 1;
    const item = await service.getNextValues(sequenceName, numberOfValues);

    if (checkResponsesStatusCodes(item)) {
      res.status(200).send({
        message: `${req.headers.actualItem} successfully retrieved`,
        code: 1,
        serviceRes: item,
      });
    } else {
      res.status(200).send({
        message: `The ${req.headers.actualItem} you want to retrieve doesn't exist`,
        code: 0,
        serviceRes: item,
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getNextValues;
