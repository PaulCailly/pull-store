const Joi = require('joi');

const schema = Joi.string().pattern(/^[0-9]+$/, {
  name: 'notANumber',
  invert: true,
});

module.exports = schema;
