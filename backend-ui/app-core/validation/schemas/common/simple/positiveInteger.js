const Joi = require('joi');

const schema = Joi.number().integer().positive().allow(0).strict();

module.exports = schema;
