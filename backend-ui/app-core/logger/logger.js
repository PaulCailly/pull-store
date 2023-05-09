const winston = require('winston');
const correlationIdNamespace = require('cls-hooked').getNamespace('correlation_id');
const appCoreConfig = require('../config/appCoreConfig');
const { appLogStream, errorLogStream } = require('../functions/generateRotationFile');

const configureLogTemplate = ({ message, timestamp, level }) => {
  const allLevels = Object.keys(logLevels.levels);
  allLevels.forEach((currentLevel) => {
    level = level.replace(currentLevel, currentLevel.toUpperCase());
  });
  return `${timestamp} | ${appCoreConfig.generalAppConfig.name} | [${level}] | ${
    correlationIdNamespace.get('correlation_id') || 'default'
  } | ${message}`;
};

const customTimeStampFormat = () => {
  return 'YYYY-MM-DDTHH:mm:ss.SSSZZ';
};

const logLevels = {
  levels: {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5,
  },
  colors: {
    fatal: 'magenta',
    error: 'red',
    warn: 'yellow',
    info: 'green',
    debug: 'blue',
    trace: 'cyan',
  },
};

const configs = {
  console: {
    handleExceptions: true,
    level: appCoreConfig.logger.logLevel,
    format: winston.format.combine(
      winston.format.colorize({ all: true }),
      winston.format.timestamp({
        format: customTimeStampFormat(),
      }),
      winston.format.printf(configureLogTemplate)
    ),
  },
  appLogFile: {
    stream: appLogStream,
    level: appCoreConfig.logger.logLevel,
    format: winston.format.combine(
      winston.format.timestamp({
        format: customTimeStampFormat(),
      }),
      winston.format.printf(configureLogTemplate)
    ),
  },
  errorLogFile: {
    stream: errorLogStream,
    level: 'error',
    format: winston.format.combine(
      winston.format.timestamp({
        format: customTimeStampFormat(),
      }),
      winston.format.printf(configureLogTemplate)
    ),
  },
};

const logger = winston.createLogger({
  levels: logLevels.levels,
  transports: [
    new winston.transports.Console(configs.console),
    new winston.transports.Stream(configs.appLogFile),
    new winston.transports.Stream(configs.errorLogFile),
  ],
});

winston.addColors(logLevels.colors);

module.exports = function (completeFilename) {
  const filename = completeFilename.split('\\').pop();
  return {
    fatal: function (msg, vars) {
      logger.log('fatal', filename + ' - ' + msg, vars);
    },
    error: function (msg, vars) {
      logger.error(filename + ' - ' + msg, vars);
    },
    warn: function (msg, vars) {
      logger.warn(filename + ' - ' + msg, vars);
    },
    info: function (msg, vars) {
      logger.info(filename + ' - ' + msg, vars);
    },
    debug: function (msg, vars) {
      logger.debug(filename + ' - ' + msg, vars);
    },
    trace: function (msg, vars) {
      logger.log('trace', filename + ' - ' + msg, vars);
    },
  };
};
