const logger = require('../../../app-core/logger/logger')(module.filename);
const getService = require('../../service/service');
const {
  checkReceivedRequests,
  checkResponsesStatusCodes,
} = require('../../../app-core/functions/checkingMethods');
const HttpError = require('../../../app-core/httpErrors/httpErrorClass');

const post = async (req, res, next) => {
  logger.info(`POST ${req.url}`);
  logger.debug(`req.body : ${JSON.stringify(req.body, null, 4)}`);

  try {
    const service = getService(req.headers.actualItem);
    const { requestIdsOk, servicesRequests } = checkReceivedRequests(req.body.serviceReq);

    if (requestIdsOk) {
      let createdItems = await service.create(req.headers.actualItem, {
        serviceReq: servicesRequests,
      });

      if (checkResponsesStatusCodes(createdItems)) {
        let message = `${req.headers.actualItem} has been added to database`;
        if (Array.isArray(createdItems) && createdItems.length > 1)
          message = `All ${req.headers.actualItem}s have been added to the database`;
        else if (!Array.isArray(req.body.serviceReq)) createdItems = createdItems[0];
        res.status(201).send({
          message,
          code: 1,
          serviceRes: createdItems,
        });
      } else {
        if (!Array.isArray(req.body.serviceReq)) createdItems = createdItems[0];
        res.status(201).send({
          message: createdItems.message,
          code: createdItems.code,
          serviceRes: createdItems,
        });
      }
    } else {
      throw new HttpError('badRequest', 'Requests must have ids !');
    }
  } catch (error) {
    next(error);
  }
};

module.exports = post;
