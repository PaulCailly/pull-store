const controller = require('../../controller/controller');
const express = require('express');
const PullStoreCollection = require('./PullStoreCollectionModel');
const getItemSchema = require('../../validation/validationSchemas');
const { reqValidation } = require('../../../app-core/middleWares/middleWares');
// const service = require('../../service/service');

class SequencePullStoreCollectionModel extends PullStoreCollection {
  #router;
  constructor() {
    super(); // WILL VERIFY IF WE ARE NOT IN ABSTRACT CLASS
    this.#router = express.Router();
    this.#configureRouter();
    // this.#service = service;
  }

  get router() {
    return this.#router;
  }

  #configureRouter() {
    const schemas = getItemSchema('sequence');
    // GET
    this.#router.get(
      `/api/sequence`,
      reqValidation(schemas.getAllServiceRequestSchema, 'query'),
      controller.getAll
    );
    // this.#router.post(`/api/sequence/get-by-ids`, controller.getByIds);
    // this.#router.post(`/api/sequence/get-distinct-values`, controller.getDistinctValues);
    this.#router.post(
      `/api/sequence/get-selected-columns`,
      reqValidation(schemas.getSelectedColumnsPayloadSchema, 'body'),
      controller.getSelectedColumns
    );

    // DELETE
    this.#router.delete(
      `/api/sequence/:id`,
      reqValidation(schemas.deleteByIdServiceRequestSchema, 'params'),
      controller.deleteById
    );
    this.#router.post(
      `/api/sequence/delete-multiple`,
      reqValidation(schemas.deleteMultiplePayloadSchema, 'body'),
      controller.deleteMultiple
    );

    // UNIQUE ROUTES
    this.#router.get(
      `/api/sequence/get-next-values`,
      reqValidation(schemas.getNextValuesServiceRequestSchema, 'query'),
      controller.getNextValues
    );
    this.#router.post(
      `/api/sequence/`,
      reqValidation(schemas.createSinglePayloadSchema, 'body'),
      controller.post
    );
  }
}

module.exports = SequencePullStoreCollectionModel;
