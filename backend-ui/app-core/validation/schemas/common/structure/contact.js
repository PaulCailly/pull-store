const Joi = require('joi');

const addressStruct = require('../../common/structure/address');

const email = require('../../common/simple/email');
const language = require('../../common/simple/language');
const phoneNumber = require('../../common/simple/phoneNumber');
const vatStruct = require('../../common/structure/vat');
const companyName = require('../../common/simple/companyName');
const name = require('../../common/simple/name');
const { positiveInteger } = require('../../commonSimpleSchemas');

const schema = Joi.object({
  reference: Joi.alternatives()
    .try(Joi.string(), positiveInteger)
    .required()
    .disallow(null)
    .required(),
  name: name.allow(null).required(),
  companyName: companyName.allow(null).required(),
  address: addressStruct.required().allow(null),
  vat: vatStruct.required().allow(null),
  phone: phoneNumber.allow(null).required(),
  language: language.allow(null).required(),
  email: email.allow(null).required(),
});

module.exports = schema;
