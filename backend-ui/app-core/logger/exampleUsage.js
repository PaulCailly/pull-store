// Requiring the logger instance wherever we need to log.
const logger = require('../logger/logger')(module.filename);

// This will effectively NOT be printed (in any of console app.log and error.log) as the logger instance “category” definitions
// says the logger will only effectively log from “info” and above.
// Note that this could be changed from the environment variables or be programmatically changed with the method logger.level()
logger.trace('trace');
logger.debug('debug');

// This will be printed on the console and in app.log but not in error.log
logger.info('info');
logger.warn('warn');

// This will be printed on the console, in app.log and in error.log
logger.error('error');
logger.fatal('fatal');
