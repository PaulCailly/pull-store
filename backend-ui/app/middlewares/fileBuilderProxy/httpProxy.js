const { createProxyMiddleware } = require('http-proxy-middleware');
const loadProxyConfig = require('../../httpProxy/loadProxyConfig');
const { fileBuilder } = require('../../config/appConfig').proxyConfig;

const options = loadProxyConfig(fileBuilder);

const middleware = createProxyMiddleware(options);

module.exports = middleware;
