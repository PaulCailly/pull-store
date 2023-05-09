const Joi = require('joi');

const schema = Joi.string().valid('eq', 'regex', 'lt', 'lte', 'gt', 'gte', 'in');

module.exports = schema;
