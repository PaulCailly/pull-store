const Joi = require('joi');
const getRecursiveSchemaKeys = require('../../getRecursiveSchemaKeys');
const { pagination } = require('../../../../app-core/validation/schemas/commonStructureSchemas');

const returnPostGetSelectedColumnsPayloadSchema = (item) => {
  const itemPayload = require(`../businessObject/structure/${item}`);
  const schema = Joi.object({
    pagination: pagination.optional().allow(null),
    columns: Joi.array()
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

module.exports = returnPostGetSelectedColumnsPayloadSchema;
