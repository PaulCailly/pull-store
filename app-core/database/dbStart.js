const appCoreConfig = require('../config/appCoreConfig');

const dbStartMongoNative = require('./mongoNative/dbStart');
// const dbStartPostgreSql = require('./postgreSql/dbStart')

let dbStart;

switch (appCoreConfig.services.implementation) {
  case 'mongoNative':
    dbStart = dbStartMongoNative;
    break;
  //   case 'postgreSql':
  //     dbStart = dbStartPostgreSql
  //     break
  default:
    dbStart = dbStartMongoNative;
}

module.exports = dbStart;
