const Joi = require('joi');
const positiveInteger = require('../simple/positiveInteger');

const schema = Joi.object({
  number: Joi.number().integer().required().allow(null),
  scale: positiveInteger.required(),
  label: Joi.number().required().allow(null),
});

module.exports = schema;
