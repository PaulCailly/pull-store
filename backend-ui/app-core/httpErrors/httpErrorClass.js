const _ = require('lodash');

const logger = require(`../logger/logger`)(module.filename);
const httpErrorDefinitions = require('./httpErrorDefinitions');

class HttpError extends Error {
  // Buidling a new http error object
  constructor(httpErrorIdentifier = 'internalError', customHttpErrorMessage, errorStack) {
    logger.debug(`Building new ${httpErrorIdentifier} HTTP error`);
    logger.debug(`Custom error message is : ${customHttpErrorMessage}`);

    // Looking for the requested error defintion from the requested error identifier string out of the error definitions
    const httpErrorDefinition = _.find(httpErrorDefinitions, ['identifier', httpErrorIdentifier]);

    logger.debug(`httpErrorDefinition : ${JSON.stringify(httpErrorDefinition, null, 4)}`);

    // Use the provided error message if any, use the requested error type default message otherwise
    const httpErrorMessage =
      customHttpErrorMessage !== '' &&
      customHttpErrorMessage !== null &&
      typeof customHttpErrorMessage !== 'undefined'
        ? customHttpErrorMessage
        : httpErrorDefinition.message;

    logger.debug(`The message to be used is : ${httpErrorMessage}`);

    // Building the classic Error class object by passing the desired error message
    super(httpErrorMessage);

    if (errorStack !== undefined) {
      this.stack = errorStack;
    }
    // Building the HTTP extensions to that classic Error object
    this.identifier = httpErrorDefinition.identifier;
    this.statusCode = httpErrorDefinition.statusCode;
    this.name = httpErrorDefinition.name;
    this.description = httpErrorDefinition.description;
  }
}

module.exports = HttpError;
