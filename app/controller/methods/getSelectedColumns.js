const logger = require('../../../app-core/logger/logger')(module.filename);
const getService = require('../../service/service');
const {
  checkReceivedRequests,
  checkResponsesStatusCodes,
} = require('../../../app-core/functions/checkingMethods');
const HttpError = require('../../../app-core/httpErrors/httpErrorClass');

const getSelectedColumns = async (req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  logger.debug(`req.params : ${JSON.stringify(req.params, null, 4)}`);
  let pluralActualItem = req.headers.actualItem + 's';
  if (req.headers.actualItem === 'source-entry') pluralActualItem = 'source-entries';

  try {
    const service = getService(req.headers.actualItem);
    // Add verification statement for ids
    const { requestIdsOk, servicesRequests } = checkReceivedRequests(req.body.serviceReq);

    if (requestIdsOk) {
      let items = await service.getSelectedColumns(req.headers.actualItem, servicesRequests);

      if (checkResponsesStatusCodes(items)) {
        if (!Array.isArray(req.body.serviceReq)) items = items[0];
        res.status(200).send({
          message: `${pluralActualItem} successfully retrieved`,
          code: 1,
          serviceRes: items,
        });
      } else {
        if (!Array.isArray(req.body.serviceReq)) items = items[0];
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

module.exports = getSelectedColumns;
