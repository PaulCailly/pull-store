// const Joi = require('joi');

// Method that envelopes the "payload" schema into the expected "Single Request" standard envelope
const singleServiceReqSchema = require('../../app-core/validation/methods/singleServiceReqSchema');
// const multipleServiceReqSchema = require('../../app-core/validation/methods/multipleServiceReqSchema');

// One for every endpoint we need to validate, only the payload for "POST / PUT"
const postDispatchPayloadSchema = require('./schemas/payloads/postDispatchPayloadSchema');

const schemas = {
  postDispatchSchema: singleServiceReqSchema(postDispatchPayloadSchema),
};

module.exports = schemas;
