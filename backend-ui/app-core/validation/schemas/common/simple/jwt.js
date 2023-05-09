const Joi = require('joi');

const isJwt = require('../../../rules/isJwt');

const schema = Joi.string().custom(isJwt, 'isJwt');

module.exports = schema;
