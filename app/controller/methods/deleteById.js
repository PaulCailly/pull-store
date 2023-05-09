const logger = require('../../../app-core/logger/logger')(module.filename);
const getService = require('../../service/service');

const deleteById = async (req, res, next) => {
  logger.info(`DELETE ${req.url}`);
  logger.debug(`req.body : ${JSON.stringify(req.body, null, 4)}`);

  try {
    const service = getService(req.headers.actualItem);
    const deleteByIdResult = await service.deleteById(req.headers.actualItem, req.params.id);
    res.send({
      message: deleteByIdResult.message,
      code: deleteByIdResult.code,
      serviceRes: {
        serviceReqMessage: deleteByIdResult.message,
        serviceReqCode: deleteByIdResult.code,
        payload: deleteByIdResult.payload,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteById;
