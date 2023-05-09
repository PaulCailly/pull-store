const Joi = require('joi');

const { urlItemToCamelCase } = require('../service/functions/utils');

const singleServiceReqSchema = require('../../app-core/validation/methods/singleServiceReqSchema');
const multipleServiceReqSchema = require('../../app-core/validation/methods/multipleServiceReqSchema');

const returnDeleteByIdServiceRequestSchema = require('./schemas/payloads/deleteByIdServiceRequestSchema');
const returnGetAllServiceRequestSchema = require('./schemas/payloads/getGetAllServiceRequestSchema');
const returnGetByIdServiceRequestSchema = require('./schemas/payloads/getGetByIdServiceRequestSchema');
const returnPostDeleteMultiplePayloadSchema = require('./schemas/payloads/postDeleteMultiplePayloadSchema');
const returnPostGetByIdsPayloadSchema = require('./schemas/payloads/postGetByIdsPayloadSchema');
const returnPostGetDistinctValuesPayloadSchema = require('./schemas/payloads/postGetDistinctValuesPayloadSchema');
const returnPostGetSelectedColumnsPayloadSchema = require('./schemas/payloads/postGetSelectedColumnsPayloadSchema');
const returnPostMultiplePayloadSchema = require('./schemas/payloads/postMultiplePayloadSchema');
const returnPostPayloadSchema = require('./schemas/payloads/postPayloadSchema');
const returnPutMultiplePayloadSchema = require('./schemas/payloads/putMultiplePayloadSchema');
const returnPutPayloadSchema = require('./schemas/payloads/putPayloadSchema');

// Only for sequences
const returnGetNextValuesServiceRequestSchema = require('./schemas/payloads/getGetNextValuesServiceRequestSchema');

const getItemSchema = (item) => {
  item = urlItemToCamelCase(item, '-');

  const schemas = {
    createSinglePayloadSchema: Joi.alternatives().try(
      singleServiceReqSchema(returnPostPayloadSchema(item)),
      multipleServiceReqSchema(returnPostPayloadSchema(item))
    ),
    updateSinglePayloadSchema: singleServiceReqSchema(returnPutPayloadSchema(item)),
    getByIdServiceRequestSchema: returnGetByIdServiceRequestSchema(item),
    deleteByIdServiceRequestSchema: returnDeleteByIdServiceRequestSchema(item),
    createMultiplePayloadSchema: singleServiceReqSchema(returnPostMultiplePayloadSchema(item)),
    getAllServiceRequestSchema: returnGetAllServiceRequestSchema(item),
    getByIdsPayloadSchema: singleServiceReqSchema(returnPostGetByIdsPayloadSchema(item)),
    updateMultiplePayloadSchema: multipleServiceReqSchema(returnPutMultiplePayloadSchema(item)),
    getDistinctValuesPayloadSchema: singleServiceReqSchema(
      returnPostGetDistinctValuesPayloadSchema(item)
    ),
    getSelectedColumnsPayloadSchema: singleServiceReqSchema(
      returnPostGetSelectedColumnsPayloadSchema(item)
    ),
    deleteMultiplePayloadSchema: singleServiceReqSchema(
      returnPostDeleteMultiplePayloadSchema(item)
    ),
  };

  if (item === 'sequence')
    schemas.getNextValuesServiceRequestSchema = returnGetNextValuesServiceRequestSchema();

  return schemas;
};

module.exports = getItemSchema;
