const controller = require('../../controller/controller');
const express = require('express');
const PullStoreCollection = require('./PullStoreCollectionModel');
const getItemSchema = require('../../validation/validationSchemas');
const { reqValidation } = require('../../../app-core/middleWares/middleWares');
// const service = require('../../service/service');

class BasicPullStoreCollection extends PullStoreCollection {
  #type;
  #router;
  constructor(type) {
    super(); // WILL VERIFY IF WE ARE NOT IN ABSTRACT CLASS
    this.#type = type;
    this.#router = express.Router();
    this.#configureRouter();
    // this.#service = service;
  }

  get router() {
    return this.#router;
  }

  #configureRouter() {
    const schemas = getItemSchema(this.#type);
    // GET
    this.#router.get(
      `/api/${this.#type}/:id`,
      reqValidation(schemas.getByIdServiceRequestSchema, 'params'),
      controller.getById
    );
    this.#router.get(
      `/api/${this.#type}`,
      reqValidation(schemas.getAllServiceRequestSchema, 'query'),
      controller.getAll
    );
    this.#router.post(
      `/api/${this.#type}/get-by-ids`,
      reqValidation(schemas.getByIdsPayloadSchema, 'body'),
      controller.getByIds
    );
    this.#router.post(
      `/api/${this.#type}/get-distinct-values`,
      reqValidation(schemas.getDistinctValuesPayloadSchema, 'body'),
      controller.getDistinctValues
    );
    this.#router.post(
      `/api/${this.#type}/get-selected-columns`,
      reqValidation(schemas.getSelectedColumnsPayloadSchema, 'body'),
      controller.getSelectedColumns
    );

    // CREATE
    this.#router.post(
      `/api/${this.#type}`,
      reqValidation(schemas.createSinglePayloadSchema, 'body'),
      controller.post
    );
    this.#router.post(
      `/api/${this.#type}/create-multiple`,
      reqValidation(schemas.createMultiplePayloadSchema, 'body'),
      controller.postMultiple
    );

    // UPDATE
    this.#router.put(
      `/api/${this.#type}/update-multiple`,
      reqValidation(schemas.updateMultiplePayloadSchema, 'body'),
      controller.putMultiple
    );
    this.#router.put(
      `/api/${this.#type}`,
      reqValidation(schemas.updateSinglePayloadSchema, 'body'),
      controller.put
    );

    // DELETE
    this.#router.delete(
      `/api/${this.#type}/:id`,
      reqValidation(schemas.deleteByIdServiceRequestSchema, 'params'),
      controller.deleteById
    );
    this.#router.post(
      `/api/${this.#type}/delete-multiple`,
      reqValidation(schemas.deleteMultiplePayloadSchema, 'body'),
      controller.deleteMultiple
    );
  }
}

module.exports = BasicPullStoreCollection;
