const Joi = require('joi');

// Please don't remove this comment to allow escape character for / in pattern for file path in husky validation
// eslint-disable-next-line
const schema = Joi.string().pattern(/^[0-9a-zA-Z_\/\-.]+$/, { name: 'File Path' });

module.exports = schema;
