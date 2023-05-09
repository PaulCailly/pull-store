const setHeaderVariables = require('./headerConfig/setHeaderVariables');

const preRequestMiddleWares = [];

preRequestMiddleWares.push(setHeaderVariables);

module.exports = preRequestMiddleWares;
