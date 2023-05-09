const Joi = require('joi');
const countryCode = require('../simple/countryCode');

const schema = Joi.object({
  number: Joi.string().required().disallow(null),
  country: countryCode.required().allow(null),
});

module.exports = schema;
