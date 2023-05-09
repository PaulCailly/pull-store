const moment = require('moment');

const logger = require('../../../logger/logger')(module.filename);
const HttpError = require('../../../httpErrors/httpErrorClass');

const errorHandler = (err, req, res, next) => {
  logger.error(`Custom errorHandler reached`);
  logger.error(`req.query : ${JSON.stringify(req.query, null, 4)}`);
  logger.error(`req.params : ${JSON.stringify(req.params, null, 4)}`);

  // We should make sure that we handle all of these Err situations that would not have
  // been caught and translated into a proper HttpError object, we should everywhere in the code
  // catch the classic error and make it a new HttpError, but if we don't, we'll get here
  // with not identifier / statusCode / etc.

  let httpError;

  if (typeof err.identifier !== 'undefined') {
    // if we get here, we already have an extended "HTTP" Error
    httpError = err;
  } else {
    // If we get here, we have a classical Error object, let us create a "HTTP" Error instead
    // Note we do not throw a new Error, we just create a new Error, and we pass the original error
    // (classic Error and not HttpError class yet) error message
    httpError = new HttpError('internalError', err.message);
  }

  logger.error(`error stack : ${JSON.stringify(err.stack, null, 4)}`);
  logger.error(`error identifier : ${err.identifier}`);
  logger.error(`error statusCode : ${err.statusCode}`);
  logger.error(`error message : ${err.message}`);
  logger.error(`error description : ${err.description}`);

  // Returning the formatted http response, out of the HTTP Error object
  res.status(httpError.statusCode).send({
    timestamp: {
      iso_8601: moment().format(),
      epoch: moment().valueOf(),
    },
    statusCode: httpError.statusCode,
    description: httpError.description,
    message: httpError.message,
    stack: httpError.stack,
  });
};

module.exports = errorHandler;
