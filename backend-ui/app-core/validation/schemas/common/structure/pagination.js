const Joi = require('joi');
const positiveInteger = require('../simple/positiveInteger');
const sort = require('../../common/structure/sort');
const rule = require('../../common/structure/rule');

const schema = Joi.object({
  page: positiveInteger.optional().allow(null),
  size: positiveInteger.optional().allow(null),
  sort: Joi.array().items(sort).optional().allow(null),
  rules: Joi.array().items(Joi.array().items(rule)).optional().allow(null),
  distinctValuesFor: Joi.array(), // TO BE DELETED IN THE FUTURE
});

module.exports = schema;
