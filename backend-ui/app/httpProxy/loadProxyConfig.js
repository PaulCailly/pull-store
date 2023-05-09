const onError = require('./httpProxyErrorHandler');
const onProxyReq = require('./httpProxyRequestHandler');

const loadProxyConfig = (config) => {
  return {
    target: config.target,
    changeOrigin: true,
    ws: false,
    pathRewrite: config.redirect ?? {},
    onError,
    onProxyReq,
  };
};

module.exports = loadProxyConfig;
