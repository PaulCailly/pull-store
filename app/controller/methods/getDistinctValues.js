const logger = require('../../../app-core/logger/logger')(module.filename);
const getService = require('../../service/service');
const {
  checkResponsesStatusCodes,
  checkReceivedRequests,
} = require('../../../app-core/functions/checkingMethods');
const HttpError = require('../../../app-core/httpErrors/httpErrorClass');

const getDistinctValues = async (req, res, next) => {
  logger.info(`POST ${req.url}`);
  logger.debug(`req.query : ${JSON.stringify(req.query, null, 4)}`);
  logger.debug(`req.params : ${JSON.stringify(req.params, null, 4)}`);
  let pluralActualItem = req.headers.actualItem + 's';
  if (req.headers.actualItem === 'source-entry') pluralActualItem = 'source-entries';
  try {
    const service = getService(req.headers.actualItem);
    // Verification of filters format
    const { requestIdsOk } = checkReceivedRequests(req.body.serviceReq);
    if (requestIdsOk) {
      const itemsDistinctValues = await service.getDistinctValues(
        req.headers.actualItem,
        req.body.serviceReq
      );

      if (checkResponsesStatusCodes(itemsDistinctValues)) {
        res.status(200).send({
          message: `${pluralActualItem} distinct values successfully retrieved`,
          code: 1,
          serviceRes: itemsDistinctValues,
        });
      } else {
        res.status(200).send({
          message: `We can not retrieve ${pluralActualItem} distinct values`,
          code: 0,
          serviceRes: itemsDistinctValues,
        });
      }
    } else {
      throw new HttpError('badRequest', 'Requests must have an id !');
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getDistinctValues;
