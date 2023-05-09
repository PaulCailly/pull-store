const Joi = require('joi');

const schema = Joi.string().alphanum();

module.exports = schema;
