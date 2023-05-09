const HttpError = require('../../../httpErrors/httpErrorClass');

const notFoundHandler = (req, res, next) => {
  throw new HttpError('notFound');
};

module.exports = notFoundHandler;
