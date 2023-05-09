const Joi = require('joi');

const countryCode = require('../../common/simple/countryCode');
const city = require('../../common/simple/city');

const schema = Joi.object({
  street: Joi.string().required().allow(null),
  postalCode: Joi.string().required().allow(null),
  city: city.required().allow(null),
  country: countryCode.required().allow(null),
});

module.exports = schema;
