const Joi = require('joi');

const schema = Joi.string().hostname();

module.exports = schema;
