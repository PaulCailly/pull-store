const validator = require('validator');

const logger = require(`../../../app-core/logger/logger`)(module.filename);

const isJwt = (value, helpers) => {
  logger.debug(`Validating JWT`);

  const result = validator.isJWT(value);
  if (result) {
    return value;
  } else {
    return helpers.error('any.invalid');
  }
};

module.exports = isJwt;
