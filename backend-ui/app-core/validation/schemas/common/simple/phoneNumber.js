const Joi = require('joi');

const schema = Joi.string().pattern(/^[0-9]+$/, { name: 'phoneNumber' });

module.exports = schema;
