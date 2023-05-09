const morgan = require('morgan');
const { accessLogStream } = require('../../../functions/generateRotationFile');

// Middleware, sets a uuid to the request and creates a new morgan token about it
const morganInit = (req, res, next) => {
  morgan.token('correlation_id', function getId(req) {
    return req.correlation_id;
  });

  morgan.token('client_identifier', function getAppId(req) {
    return req.client_identifier;
  });

  next();
};

// Morgan middleware that logs to the console
const accessLogConsole = morgan(
  ':date[iso] | :client_identifier | :method | :url | HTTP/:http-version | :correlation_id | :status | :response-time ms'
);

// Morgan middleware that logs to the access.log
const accessLogFile = morgan(
  ':date[iso] | :client_identifier | :method | :url | HTTP/:http-version | :correlation_id | :status | :response-time ms',
  { stream: accessLogStream }
);

// We combine middlewares into an array of middlewares
const accessLogMiddleWare = [morganInit, accessLogFile, accessLogConsole];

module.exports = accessLogMiddleWare;
