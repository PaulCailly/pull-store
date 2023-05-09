const path = require('path');

// General level information for this application
const general = {
  name: 'concreteasy-backend-ui',
  description: 'Reverse proxy for concreateasy project',
  appVersion: '1',
};

// The local server port this application is listening on. It can be different (and it usually is !) from the access URL port
const api = {
  localPort: process.env.LOCALPORT ? process.env.LOCALPORT : 9016,
  appAccessUrlPort: process.env.APPACCESSURLPORT
    ? process.env.APPACCESSURLPORT
    : `http://localhost:9016`,
};

const featureSwitches = {
  validation: true,
  keycloak: {
    enabled: true,
    level: 'roles',
    /**
     * - level: 'basic'
     *   will provide basic authentication
     *   with the keycloak server, will not check
     *   for roles
     * - level: 'roles'
     *   will provide full authentication
     *   and authorization based on keycloak/rabac
     *   policies
     */
  },
};

const keycloakRoleConfig = {
  // rabacRoles: {
  //   admin: 'dce_ebil_tcc_admin',
  //   operator: 'dce_ebil_tcc_operator',
  //   finance: 'dce_ebil_tcc_finance',
  // },
};

const proxyConfig = {
  // orchestrator: {
  //   target:
  //     process.env.ORCHESTRATORURLPORT ??
  //     'https://playground.dn-analytics.com/jellyfish/macaw/spring-orchestrator',
  // },
  pullStore: {
    target: process.env.PULLSTOREURLPORT ?? 'https://localhost:9003',
  },
  // fileCreator: {
  //   target:
  //     process.env.FILECREATORURLPORT ??
  //     'https://playground.dn-analytics.com/jellyfish/macaw/node-file-creator',
  // },
  // fileBuilder: {
  //   target:
  //     process.env.FILEBUILDERURLPORT ??
  //     'https://playground.dn-analytics.com/jellyfish/macaw/spring-file-builder',
  // },
};

const appCoreConfig = {
  api: {
    localPort: api.localPort,
    // This is the URL from which clients will connect to the application, including everything : protocol, subdomain, domain, path, port if any
    appAccessUrlPort: api.appAccessUrlPort,
  },

  database: {
    mongoDbUri: process.env.MONGODBURI ? process.env.MONGODBURI : 'URI should be provided !',
  },

  // Swagger definitions for the /app related routes
  swaggerConfig: {
    info: {
      title: general.name,
      version: general.appVersion,
      description: general.description,
    },
    apis: [
      `${path.resolve(__dirname, '..', 'swagger')}/*.js`,
      `${path.resolve(__dirname, '..', 'swagger')}/validation/*.js`,
    ],
    activeAppSwagger: true,
  },

  logger: {
    logLocation: process.env.LOGLOCATION
      ? path.resolve(process.env.LOGLOCATION)
      : path.resolve(__dirname, '..', '..', 'logs'),
    logLevel: process.env.LOGLEVEL ? process.env.LOGLEVEL : 'info',
    logFileSizeByte: process.env.LOGFILESIZEBYTE ? process.env.LOGFILESIZEBYTE : 10000000,
  },

  helmet: {
    // We can here configure things from the app and push it to the core level
  },

  cors: {
    // We can here configure things from the app and push it to the core level
    requestOriginWhitelist: ['localhost:8080'],
  },

  expressSessionConfig: {
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  },

  keycloakClientConfig: {
    jwksEndpoint: process.env.KEYCLOAK_JWKS,
  },

  keycloakAuthConfig: {
    username: process.env.KEYCLOAK_CLIENT_USERNAME,
    password: process.env.KEYCLOAK_CLIENT_PASSWORD,
    tokenExpOffset: 1000,
  },

  middleWares: {
    accessLogger: {
      use: true,
    },
    helmet: {
      use: true,
    },
    cors: {
      use: true,
    },
    expressJson: {
      use: true,
      config: { limit: '50mb' },
    },
    errorHandler: {
      use: true,
    },
  },

  services: {
    implementation: 'mongoNative',
  },
};

const appConfig = {
  general,
  api,
  proxyConfig,
  appCoreConfig,
  featureSwitches,
  keycloakRoleConfig,
};

module.exports = appConfig;
