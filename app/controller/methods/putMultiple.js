const logger = require('../../../app-core/logger/logger')(module.filename);
const getService = require('../../service/service');
const {
  checkReceivedRequests,
  checkResponsesStatusCodes,
} = require('../../../app-core/functions/checkingMethods');
const HttpError = require('../../../app-core/httpErrors/httpErrorClass');

const putMultipleItems = async (req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  logger.debug(`req.body : ${JSON.stringify(req.body, null, 4)}`);
  let pluralActualItem = req.headers.actualItem + 's';
  if (req.headers.actualItem === 'source-entry') pluralActualItem = 'source-entries';

  try {
    const service = getService(req.headers.actualItem);
    const { servicesRequests, requestIdsOk } = checkReceivedRequests(req.body.serviceReq);
    if (requestIdsOk) {
      const item = await service.updateMultiple(req.headers.actualItem, servicesRequests);

      if (checkResponsesStatusCodes(item)) {
        res
          .status(200)
          .send({ message: `${pluralActualItem} successfully updated`, code: 1, serviceRes: item });
      } else {
        res.status(200).send({
          message: `We can't update some ${pluralActualItem} in database`,
          code: 0,
          serviceRes: item,
        });
      }
    } else {
      throw new HttpError('badRequest', 'Request(s) must have id !');
    }
  } catch (error) {
    next(error);
  }
};

module.exports = putMultipleItems;
