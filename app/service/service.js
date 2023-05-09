const basicPullStoreService = require('./basicPullStoreService/service');
const sequencePullStoreService = require('./sequencePullStoreService/service');

const getService = (endpoint) => {
  let service;
  switch (endpoint) {
    case 'sequence':
      service = sequencePullStoreService;
      break;
    default:
      service = basicPullStoreService;
      break;
  }
  return service;
};

module.exports = getService;
