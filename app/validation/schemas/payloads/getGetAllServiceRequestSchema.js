const Joi = require('joi');

const returnGetAllServiceRequestSchema = (item) => {
  const schema = Joi.object({
    limit: Joi.number().integer().positive().optional(),
    skip: Joi.number().integer().positive().optional(),
  });
  return schema;
};

module.exports = returnGetAllServiceRequestSchema;
