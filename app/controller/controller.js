const post = require('./methods/post');
const getAll = require('./methods/getAll');
const getById = require('./methods/getById');
const getByIds = require('./methods/getByIds');
const postMultiple = require('./methods/postMultiple');
const deleteById = require('./methods/deleteById');
const deleteMultiple = require('./methods/deleteMultiple');
const putMultiple = require('./methods/putMultiple');
const put = require('./methods/put');
const getSelectedColumns = require('./methods/getSelectedColumns');
const getDistinctValues = require('./methods/getDistinctValues');
const getNextValues = require('./methods/getNextValues');

const controller = {
  post,
  getAll,
  getById,
  getByIds,
  putMultiple,
  postMultiple,
  deleteById,
  deleteMultiple,
  put,
  getSelectedColumns,
  getDistinctValues,
  getNextValues,
};

module.exports = controller;
