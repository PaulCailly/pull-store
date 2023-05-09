const create = require('./methods/create');
const getAll = require('./methods/getAll');
const getById = require('./methods/getById');
const getByIds = require('./methods/getByIds');
const createMultiple = require('./methods/createMultiple');
const updateMultiple = require('./methods/updateMultiple');
const deleteById = require('./methods/deleteById');
const deleteMultiple = require('./methods/deleteMultiple');
const update = require('./methods/update');
const getSelectedColumns = require('./methods/getSelectedColumns');
const getDistinctValues = require('./methods/getDistinctValues');

const service = {
  create,
  getAll,
  getById,
  getByIds,
  createMultiple,
  updateMultiple,
  deleteById,
  deleteMultiple,
  update,
  getSelectedColumns,
  getDistinctValues,
};

module.exports = service;
