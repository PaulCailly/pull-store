const rfs = require('rotating-file-stream');
const path = require('path');

const appCoreConfig = require('../config/appCoreConfig');

// Filename generator for morgan rotated file
const pad = (num) => (num > 9 ? '' : '0') + num;

const logGenerator = (logFileName) => (time, index) => {
  let accessLogFileName;

  if (!time) {
    accessLogFileName = path.join(appCoreConfig.logger.logLocation, logFileName);
  } else {
    const month = time.getFullYear() + '' + pad(time.getMonth() + 1);
    const day = pad(time.getDate());
    const hour = pad(time.getHours());
    const minute = pad(time.getMinutes());

    accessLogFileName = path.join(
      appCoreConfig.logger.logLocation,
      `${month}/${month}${day}-${hour}${minute}-${index}-${logFileName}.gz`
    );
  }

  return accessLogFileName;
};

// Create a rotated stream for morgan to write to, it is connected to the log file
const appLogStream = rfs.createStream(logGenerator('app.log'), {
  size: `${appCoreConfig.logger.logFileSizeByte}B`,
  compress: 'gzip',
});

const errorLogStream = rfs.createStream(logGenerator('error.log'), {
  size: `${appCoreConfig.logger.logFileSizeByte}B`,
  compress: 'gzip',
});

const accessLogStream = rfs.createStream(logGenerator('access.log'), {
  size: `${appCoreConfig.logger.logFileSizeByte}B`,
  compress: 'gzip',
});

module.exports = { appLogStream, errorLogStream, accessLogStream };
