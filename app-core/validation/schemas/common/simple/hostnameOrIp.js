const Joi = require('joi');

const schema = Joi.alternatives().try(Joi.string().hostname(), Joi.string().ip());

module.exports = schema;
