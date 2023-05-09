const Joi = require('joi');

const mongoDbId = require('../../../../app-core/validation/schemas/common/simple/mongoDbId');
const { pagination } = require('../../../../app-core/validation/schemas/commonStructureSchemas');

const returnPostGetByIdsPayloadSchema = (item) => {
  const schema = Joi.object({
    pagination: pagination.optional().allow(null),
    ids: Joi.array()
      .items(
        Joi.object({
          _id: mongoDbId.required(),
        })
      )
      .required(),
  });

  return schema;
};

module.exports = returnPostGetByIdsPayloadSchema;
