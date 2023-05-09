const alphaNumeric = require('./common/simple/alphaNumeric');
const base64 = require('./common/simple/base64');
const companyName = require('./common/simple/companyName');
const comparisonOperator = require('./common/simple/comparisonOperator');
const countryCode = require('./common/simple/countryCode');
const csvDelimiter = require('./common/simple/csvDelimiter');
const currencyCode = require('./common/simple/currencyCode');
const dateEpoch = require('./common/simple/dateEpoch');
const dateFormat = require('./common/simple/dateFormat');
const dateIso = require('./common/simple/dateIso');
const email = require('./common/simple/email');
const fileName = require('./common/simple/fileName');
const filePath = require('./common/simple/filePath');
const hostname = require('./common/simple/hostname');
const hostnameOrIp = require('./common/simple/hostnameOrIp');
const httpHttpsUrl = require('./common/simple/httpHttpsUrl');
const ip = require('./common/simple/ip');
const jwt = require('./common/simple/jwt');
const language = require('./common/simple/language');
const mongoDbId = require('./common/simple/mongoDbId');
const name = require('./common/simple/name');
const phoneNumber = require('./common/simple/phoneNumber');
const positiveInteger = require('./common/simple/positiveInteger');
const stringNotANumber = require('./common/simple/stringNotANumber');
const uri = require('./common/simple/uri');
const uuid = require('./common/simple/uuid');

const schemas = {
  alphaNumeric,
  base64,
  companyName,
  comparisonOperator,
  countryCode,
  csvDelimiter,
  currencyCode,
  dateEpoch,
  dateFormat,
  dateIso,
  email,
  fileName,
  filePath,
  hostname,
  hostnameOrIp,
  httpHttpsUrl,
  ip,
  jwt,
  language,
  mongoDbId,
  name,
  phoneNumber,
  positiveInteger,
  stringNotANumber,
  uri,
  uuid,
};

module.exports = schemas;
