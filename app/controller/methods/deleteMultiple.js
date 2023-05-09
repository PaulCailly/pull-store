const logger = require('../../../app-core/logger/logger')(module.filename);
const getService = require('../../service/service');
const {
  checkRequestIds,
  checkResponsesStatusCodes,
} = require('../../../app-core/functions/checkingMethods');
const HttpError = require('../../../app-core/httpErrors/httpErrorClass');

const deleteMultiple = async (req, res, next) => {
  logger.info(`POST ${req.url}`);
  logger.debug(`req.body : ${JSON.stringify(req.body, null, 4)}`);

  try {
    const service = getService(req.headers.actualItem);
    // Add verification statement for ids
    if (checkRequestIds(req.body.serviceReq)) {
      const deleteMultipleResult = await service.deleteMultiple(
        req.headers.actualItem,
        req.body.serviceReq
      );

      if (checkResponsesStatusCodes(deleteMultipleResult)) {
        res.status(200).send({
          message: `${req.headers.actualItem} successfully deleted`,
          code: 1,
          serviceRes: deleteMultipleResult,
        });
      } else {
        res.status(200).send({
          message: `Some ${req.headers.actualItem} have not been deleted cause they don't exists`,
          code: 0,
          serviceRes: deleteMultipleResult,
        });
      }
    } else {
      throw new HttpError('badRequest', 'Requests must have an id !');
    }
  } catch (error) {
    next(error);
  }
};

module.exports = deleteMultiple;
