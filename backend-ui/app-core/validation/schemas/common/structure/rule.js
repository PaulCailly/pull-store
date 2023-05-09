const Joi = require('joi');
const { comparisonOperator } = require('../../commonSimpleSchemas');

const schema = Joi.object({
  name: Joi.string().required().disallow(null),
  value: Joi.any().required().disallow(null),
  operation: comparisonOperator.required().disallow(null),
});

module.exports = schema;
