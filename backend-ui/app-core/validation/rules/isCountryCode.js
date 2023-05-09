const validator = require('validator');

const logger = require(`../../logger/logger`)(module.filename);

const isCountryCode = (value, helpers) => {
  logger.debug(`Validating Country Code`);

  const result = validator.isISO31661Alpha2(value);
  if (result || value === 'EL') {
    return value;
  } else {
    return helpers.error('any.invalid');
  }
};

module.exports = isCountryCode;
