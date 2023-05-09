const Joi = require('joi');

const returnPostDeleteMultiplePayloadSchema = (item) => {
  const schema = Joi.object({
    filter: Joi.object().required(),
  });
  return schema;
};

module.exports = returnPostDeleteMultiplePayloadSchema;
