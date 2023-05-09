const Joi = require('joi');

const schema = Joi.object({
  value: Joi.string().required().disallow(null),
  ascending: Joi.boolean().required().disallow(null),
});

module.exports = schema;
