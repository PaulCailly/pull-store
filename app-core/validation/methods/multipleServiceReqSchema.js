const Joi = require('joi');

const logger = require(`../../../app-core/logger/logger`)(module.filename);

const serviceReqId = require('../schemas/common/structure/serviceReqId');

// This "payloadSchema" should be passed by the application layer which wiill
// be using this function to "wrap" the appropriate envelope around the payload
// it will define

const multipleServiceReqSchema = (payloadSchema) => {
  logger.debug(`Creating Multiple Service Request schema for given payload schema`);
  return Joi.object({
    serviceReq: Joi.array()
      .items(
        Joi.object({
          serviceReqId: serviceReqId.required(),
          payload: payloadSchema.required(),
        }).required()
      )
      .required(),
  });
};

module.exports = multipleServiceReqSchema;
