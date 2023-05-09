const create = require('./methods/create');
const getAll = require('../basicPullStoreService/methods/getAll');
const getById = require('../basicPullStoreService/methods/getById');
const deleteById = require('../basicPullStoreService/methods/deleteById');
const deleteMultiple = require('../basicPullStoreService/methods/deleteMultiple');
const getSelectedColumns = require('../basicPullStoreService/methods/getSelectedColumns');
const getNextValues = require('./methods/getNextValues');

const service = {
  create,
  getAll,
  getById,
  deleteById,
  deleteMultiple,
  getSelectedColumns,
  getNextValues,
};

module.exports = service;
