const { createProxyMiddleware } = require('http-proxy-middleware');
const loadProxyConfig = require('../../httpProxy/loadProxyConfig');
const { orchestrator } = require('../../config/appConfig').proxyConfig;

const options = loadProxyConfig(orchestrator);

const middleware = createProxyMiddleware(options);

module.exports = middleware;
