const Joi = require('joi');

const logger = require(`../../../app-core/logger/logger`)(module.filename);

const serviceReqId = require('../schemas/common/structure/serviceReqId');

// This "payloadSchema" should be passed by the application layer which wiill
// be using this function to "wrap" the appropriate envelope around the payload
// it will define

const singleServiceReqSchema = (payloadSchema) => {
  logger.debug(`Creating Single Service Request schema for given payload schema`);
  return Joi.object({
    serviceReq: Joi.object({
      serviceReqId: serviceReqId.required(),
      payload: payloadSchema.required(),
    }).required(),
  });
};

module.exports = singleServiceReqSchema;
