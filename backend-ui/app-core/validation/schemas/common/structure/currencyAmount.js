const Joi = require('joi');

const currencyCode = require('../../common/simple/currencyCode');

const schema = Joi.object({
  number: Joi.number().integer().unsafe().strict().required(),
  scale: Joi.number().integer().strict().required(),
  label: Joi.number().strict().unsafe().required(),
  currency: currencyCode.required(),
});

module.exports = schema;
