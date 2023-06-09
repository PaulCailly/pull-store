const Joi = require('joi');

const schema = Joi.alternatives().try(
  Joi.string().isoDate(),
  Joi.string().pattern(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.*$/)
);

module.exports = schema;
