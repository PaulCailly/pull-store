const helmet = require('helmet');

// This applies the default configuration, for options to activate and configurat the helmet middleware,
// browse this source : https://helmetjs.github.io/
const helmetMiddleWare = helmet({
  contentSecurityPolicy: {
    useDefaults: true,
    directives: {
      'script-src': ["'self'"],
      upgradeInsecureRequests: null,
    },
  },
});

module.exports = helmetMiddleWare;
