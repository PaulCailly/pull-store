const Joi = require('joi');

const schema = Joi.number().integer().positive().strict();

module.exports = schema;
