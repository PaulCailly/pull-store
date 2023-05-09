const Joi = require('joi');

// Standard re-usable validation schemas from the core
const { date } = require('../../../../app-core/validation/schemas/commonStructureSchemas');
const {
  stringNotANumber,
  dateIso,
} = require('../../../../app-core/validation/schemas/commonSimpleSchemas');

const schema = Joi.object({
  anythingOptional: Joi.any().optional(),
  anythingMandatory: Joi.any().required(),
  number: Joi.number().required(),
  numberPositiveTwoDecimalMax: Joi.number().positive().precision(2).required(),
  integer: Joi.number().integer().required(),
  string: Joi.string().required(),
  stringTenCharacters: Joi.string().length(10).required(),
  alphanum: Joi.string().alphanum().required(),

  stringNotNumberString: stringNotANumber.required(),

  isoDate: dateIso.required(),
  complexDate: date.required(),
});

module.exports = schema;
