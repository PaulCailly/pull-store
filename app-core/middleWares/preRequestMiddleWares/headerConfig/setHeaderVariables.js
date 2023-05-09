const appCoreConfig = require('../../../config/appCoreConfig');
const { v4: uuidv4 } = require('uuid');
const correlationIdNamespace = require('cls-hooked').getNamespace('correlation_id');

const setHeaderVariables = (req, res, next) => {
  // Configure Micro-service name inside the request header
  req.client_identifier = appCoreConfig.generalAppConfig.name;
  res.setHeader('client_identifier', req.client_identifier);

  // Configure correlationId inside the request and the response header
  const correlationId = req.header('correlation_id') || uuidv4();
  req.correlation_id = correlationId;
  res.setHeader('correlation_id', correlationId);
  correlationIdNamespace.bindEmitter(req);
  correlationIdNamespace.bindEmitter(res);
  correlationIdNamespace.run(() => {
    correlationIdNamespace.set('correlation_id', correlationId);
    next();
  });
};

module.exports = setHeaderVariables;
