const qs = require('qs');

// This function will be triggered right before the execution of the middleware
// It allows us to "restore" the changes made by expressJson
// Otherwise the two middlewares are incompatible
const onProxyReq = (proxyReq, req, res) => {
  // If no request body detected, we do nothing
  if (!req.body || !Object.keys(req.body).length) {
    return;
  }

  const contentType = proxyReq.getHeader('Content-Type');

  if (contentType.includes('application/json')) {
    writeBody(proxyReq, JSON.stringify(req.body));
  } else if (contentType === 'application/x-www-form-urlencoded') {
    writeBody(proxyReq, qs.stringify(req.body));
  }
};

const writeBody = (proxyRequest, bodyData) => {
  proxyRequest.setHeader('Content-Length', Buffer.byteLength(bodyData));
  proxyRequest.write(bodyData);
};

module.exports = onProxyReq;
