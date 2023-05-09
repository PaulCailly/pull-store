const Joi = require('joi');

const isCountryCode = require('../../../rules/isCountryCode');

const schema = Joi.string().custom(isCountryCode, 'isCountryCode');

module.exports = schema;
