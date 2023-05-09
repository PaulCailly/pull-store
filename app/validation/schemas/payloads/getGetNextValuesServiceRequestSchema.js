const Joi = require('joi');

const returnGetNextValuesServiceRequestSchema = () => {
  const schema = Joi.object({
    sequenceName: Joi.string().required(),
    numberOfValues: Joi.number().integer().positive().optional(),
  });
  return schema;
};

module.exports = returnGetNextValuesServiceRequestSchema;
