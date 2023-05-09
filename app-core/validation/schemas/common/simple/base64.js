const Joi = require('joi');

const schema = Joi.string().base64();

module.exports = schema;
