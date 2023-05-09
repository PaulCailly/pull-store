const validator = require('validator');

const logger = require(`../../logger/logger`)(module.filename);

const isCurrencyCode = (value, helpers) => {
  logger.debug(`Validating currency code as ISO 4217`);

  const result = validator.isISO4217(value);
  if (result) {
    return value;
  } else {
    return helpers.error('any.invalid');
  }
};

module.exports = isCurrencyCode;
