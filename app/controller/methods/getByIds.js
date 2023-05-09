const logger = require('../../../app-core/logger/logger')(module.filename);
const getService = require('../../service/service');
const {
  checkRequestIds,
  checkResponsesStatusCodes,
} = require('../../../app-core/functions/checkingMethods');
const HttpError = require('../../../app-core/httpErrors/httpErrorClass');

const getByIds = async (req, res, next) => {
  logger.info(`POST ${req.url}`);
  logger.debug(`req.body : ${JSON.stringify(req.body, null, 4)}`);
  let pluralActualItem = req.headers.actualItem + 's';
  if (req.headers.actualItem === 'source-entry') pluralActualItem = 'source-entries';

  try {
    const service = getService(req.headers.actualItem);
    // Add verification statement for ids
    if (checkRequestIds(req.body.serviceReq)) {
      const items = await service.getByIds(req.headers.actualItem, req.body);

      if (checkResponsesStatusCodes(items)) {
        res.status(200).send({
          message: `${pluralActualItem} successfully retrieved`,
          code: 1,
          serviceRes: items,
        });
      } else {
        res.status(200).send({
          message: `Some ${pluralActualItem} are missing`,
          code: 0,
          serviceRes: items,
        });
      }
    } else {
      throw new HttpError('badRequest', 'Requests must have an id !');
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getByIds;
