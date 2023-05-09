const Joi = require('joi');

const schema = Joi.string().ip();

module.exports = schema;
