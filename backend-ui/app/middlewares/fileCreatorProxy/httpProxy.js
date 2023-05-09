const { createProxyMiddleware } = require('http-proxy-middleware');
const loadProxyConfig = require('../../httpProxy/loadProxyConfig');
const { fileCreator } = require('../../config/appConfig').proxyConfig;

const options = loadProxyConfig(fileCreator);

const middleware = createProxyMiddleware(options);

module.exports = middleware;
