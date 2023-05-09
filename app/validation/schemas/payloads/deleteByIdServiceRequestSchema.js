const Joi = require('joi');

const mongoDbId = require('../../../../app-core/validation/schemas/common/simple/mongoDbId');

const returnDeleteByIdServiceRequestSchema = (item) => {
  const schema = Joi.object({
    id: mongoDbId.required(),
  });
  return schema;
};

module.exports = returnDeleteByIdServiceRequestSchema;
