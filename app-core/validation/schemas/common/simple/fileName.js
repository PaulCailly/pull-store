const Joi = require('joi');

const schema = Joi.string().pattern(/^[0-9a-zA-Z_\-.]+$/, { name: 'File Name' });

module.exports = schema;
