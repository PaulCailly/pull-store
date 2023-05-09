const logger = require('../../logger/logger')(module.filename);
const HttpError = require('../../httpErrors/httpErrorClass');

const reqValidation = (schema, property) => {
  return (req, res, next) => {
    try {
      logger.info(
        `Reached the request validation middleware to validate request on endpoint : ${req.route.path}`
      );

      logger.debug(
        `Validating the following req.${property} : ${JSON.stringify(req.body, null, 4)}`
      );

      // Validating the body against the desired schema for this endpoint
      const { error } = schema.validate(req[property], {
        abortEarly: false,
      });

      const valid = error == null;

      if (valid) {
        logger.debug(`Request data is valid`);
        next();
      } else {
        logger.debug(`Request data is not valid`);

        // reading validation errors and returning the error array as the error stack
        const errorDetails = error.details.map((errorDetail) => {
          return {
            message: errorDetail.message,
            item: errorDetail.context.label,
            value: errorDetail.context.value,
          };
        });

        throw new HttpError('badRequest', 'The request did not pass validation', errorDetails);
      }
    } catch (error) {
      if (error.identifier === 'badRequest')
        throw new HttpError(error.identifier, error.message, error.stack);
      else throw new HttpError('internalError', error.message, error.stack);
    }
  };
};
module.exports = reqValidation;
