const Joi = require('joi');

const returnPostMultiplePayloadSchema = (item) => {
  const itemPayload = require(`../businessObject/structure/${item}`);

  return Joi.array().items(itemPayload);
};

module.exports = returnPostMultiplePayloadSchema;
