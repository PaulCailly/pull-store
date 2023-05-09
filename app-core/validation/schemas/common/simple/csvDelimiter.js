const Joi = require('joi');

const schema = Joi.string().pattern(/^(,|;|#|\|)$/, { name: 'CSV delimiter' });

module.exports = schema;
