const Joi = require('joi');

const schema = Joi.string().uri({
  scheme: ['http', 'https'],
});

module.exports = schema;
