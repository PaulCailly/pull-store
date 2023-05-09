const Joi = require('joi');

const dateIsoSchema = require('../../common/simple/dateIso');
const dateEpochSchema = require('../../common/simple/dateEpoch');

const schema = Joi.object({
  iso_8601: dateIsoSchema.required(),
  epoch: dateEpochSchema.required(),
});

module.exports = schema;
