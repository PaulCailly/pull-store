const preRequestMiddleWares = require('./preRequestMiddleWares/preRequestMiddleWares');
const postRequestMiddleWares = require('./postRequestMiddleWares/postRequestMiddleWares');
const reqValidation = require('./validationMiddleWare/reqValidation');

module.exports = {
  preRequestMiddleWares,
  postRequestMiddleWares,
  reqValidation,
};
