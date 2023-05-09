const Joi = require('joi');

const schema = Joi.string().guid();

module.exports = schema;
