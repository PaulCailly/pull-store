const address = require('./common/structure/address');
const contact = require('./common/structure/contact');
const currencyAmount = require('./common/structure/currencyAmount');
const date = require('./common/structure/date');
const number = require('./common/structure/number');
const pagination = require('./common/structure/pagination');
const rule = require('./common/structure/rule');
const serviceReqId = require('./common/structure/serviceReqId');
const sort = require('./common/structure/sort');

const schemas = {
  address,
  contact,
  currencyAmount,
  date,
  number,
  pagination,
  rule,
  serviceReqId,
  sort,
};

module.exports = schemas;
