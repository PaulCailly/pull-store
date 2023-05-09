const Joi = require('joi');
const _ = require('lodash');

const mongoDbId = require('../../../../app-core/validation/schemas/common/simple/mongoDbId');
const createOptionalSchemaForUpdate = require('../../createOptionalSchemaForUpdate');

const returnPutPayloadSchema = (item) => {
  const itemPayload = require(`../businessObject/structure/${item}`);
  const itemPayload2 = _.cloneDeep(itemPayload);
  const schema = Joi.object({
    _id: mongoDbId.required(),
    updates: createOptionalSchemaForUpdate(itemPayload2, item).required(),
  });

  return schema;
};

module.exports = returnPutPayloadSchema;
