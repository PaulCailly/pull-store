const moment = require('moment');
const logger = require('../../app-core/logger/logger')(module.filename);

const onError = (err, req, res, target) => {
  logger.info(`HTTP-Proxy error handler reached`);

  logger.error(`Something went wrong when trying to reach ${target}`);

  logger.debug(`req.query : ${JSON.stringify(req.query, null, 4)}`);
  logger.debug(`req.params : ${JSON.stringify(req.params, null, 4)}`);

  const statusCode = 500;
  const identifier = 'internalError';
  const description = 'The server has encountered a situation it does not know how to handle';
  const message = 'Error occurred while trying to proxy the request';

  logger.error(`error stack : ${err.stack}`);
  logger.error(`error identifier : ${identifier}`);
  logger.error(`error statusCode : ${statusCode}`);
  logger.error(`error message : ${message}`);
  logger.error(`error description : ${description}`);

  res.status(500).send({
    timestamp: {
      iso_8601: moment().format(),
      epoch: moment().valueOf(),
    },
    statusCode,
    description,
    message,
    stack: err.stack,
  });
};

module.exports = onError;
