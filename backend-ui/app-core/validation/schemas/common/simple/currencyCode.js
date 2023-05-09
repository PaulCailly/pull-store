const Joi = require('joi');

const isCurrencyCode = require('../../../rules/isCurrencyCode');

const schema = Joi.string().custom(isCurrencyCode, 'isCurrencyCode');

module.exports = schema;
