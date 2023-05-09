const Joi = require('joi');

const schema = Joi.string().uri();

module.exports = schema;
