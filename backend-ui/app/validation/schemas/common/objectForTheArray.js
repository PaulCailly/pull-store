const Joi = require('joi');

// Standard re-usable validation schemas from the core
const {
  email,
  uri,
  httpHttpsUrl,
  hostname,
  ip,
  hostnameOrIp,
  base64,
  uuid,
} = require('../../../../app-core/validation/schemas/commonSimpleSchemas');

const schema = Joi.object({
  email: email.required(),
  uri: uri.required(),
  httpUri: httpHttpsUrl.required(),
  hostname: hostname.required(),
  ip: ip.required(),
  hostnameOrIp: hostnameOrIp.required(),
  base64: base64.required(),
  uuid: uuid.required(),
});

module.exports = schema;
