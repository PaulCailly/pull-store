const { createProxyMiddleware } = require('http-proxy-middleware');
const loadProxyConfig = require('../../httpProxy/loadProxyConfig');
const { pullStore } = require('../../config/appConfig').proxyConfig;

const options = loadProxyConfig(pullStore);

const middleware = createProxyMiddleware(options);

module.exports = middleware;
