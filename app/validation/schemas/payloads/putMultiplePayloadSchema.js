const Joi = require('joi');
const _ = require('lodash');

const createOptionalSchemaForUpdate = require('../../createOptionalSchemaForUpdate');
const returnPutMultiplePayloadSchema = (item) => {
  const itemPayload = require(`../businessObject/structure/${item}`);
  const itemPayload2 = _.cloneDeep(itemPayload);
  const schema = Joi.object({
    filter: Joi.object().required(),
    updates: createOptionalSchemaForUpdate(itemPayload2, item).required(),
  });
  return schema;
};

module.exports = returnPutMultiplePayloadSchema;
