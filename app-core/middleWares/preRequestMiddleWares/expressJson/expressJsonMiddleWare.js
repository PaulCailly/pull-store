const json = require('express').json;

const appCoreConfig = require('../../../config/appCoreConfig');

const expressJsonMiddleWare = json(appCoreConfig.middleWares.expressJson.config);
module.exports = expressJsonMiddleWare;
