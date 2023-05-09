const logger = require('../../../app-core/logger/logger')(module.filename);
const getService = require('../../service/service');
const { checkResponsesStatusCodes } = require('../../../app-core/functions/checkingMethods');

const getAll = async (req, res, next) => {
  logger.info(`GET ${req.url}`);
  logger.debug(`req.query : ${JSON.stringify(req.query, null, 4)}`);
  logger.debug(`req.params : ${JSON.stringify(req.params, null, 4)}`);

  try {
    const service = getService(req.headers.actualItem);
    const limit = req.query.limit ? Number.parseInt(req.query.limit) : 0;
    const skip = req.query.skip ? Number.parseInt(req.query.skip) : 0;

    const items = await service.getAll(req.headers.actualItem, limit, skip);

    if (checkResponsesStatusCodes(items)) {
      res.status(200).send({
        message: `${req.headers.actualItem}s successfully retrieved`,
        code: 1,
        serviceRes: items,
      });
    } else {
      res.status(200).send({
        message: `We can not retrieve ${req.headers.actualItem}s`,
        code: 0,
        serviceRes: items,
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
