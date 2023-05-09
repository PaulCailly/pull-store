const Joi = require('joi');
const mongoDbId = require('../simple/mongoDbId');
const dateIso = require('../simple/dateIso');

const schema = Joi.object({
  _id: mongoDbId.required(),
  createdAt: dateIso.required(),
  updatedAt: dateIso.required(),
});

module.exports = schema;
