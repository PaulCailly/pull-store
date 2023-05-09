const Joi = require('joi');
const name = require('../../../../../app-core/validation/schemas/common/simple/name');

const schema = Joi.object({
  name: name.required(),
});

module.exports = schema;
