const cors = require('cors');

const corsOptionsDelegate = (req, callback) => {
  const corsOptions = {
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'HEAD'],
    credentials: true,
    preflightContinue: false,
    optionSuccessStatus: 200,
  };

  callback(null, corsOptions); // callback expects two parameters: error and options
};

const corsMiddleWare = cors(corsOptionsDelegate);

module.exports = corsMiddleWare;
