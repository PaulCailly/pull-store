const Joi = require('joi');
const { pagination } = require('../../../../app-core/validation/schemas/commonStructureSchemas');
const getRecursiveSchemaKeys = require('../../getRecursiveSchemaKeys');

const returnPostGetDistinctValuesPayloadSchema = (item) => {
  const itemPayload = require(`../businessObject/structure/${item}`);
  const schema = Joi.object({
    pagination: pagination.optional().allow(null),
    distinctValuesFor: Joi.array()
      .items(
        Joi.string().valid(
          ...getRecursiveSchemaKeys(itemPayload, '', item),
          '_id',
          'createdAt',
          'updatedAt'
        )
      )
      .required(),
  });
  return schema;
};

module.exports = returnPostGetDistinctValuesPayloadSchema;
