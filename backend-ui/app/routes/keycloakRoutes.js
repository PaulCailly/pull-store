const router = require('express').Router();

const logger = require('../../app-core/logger/logger')(module.filename);

const { level, enabled } = require('../config/appConfig').featureSwitches.keycloak;

const protectInternal = require('../kcValidation/protectInternal');

if (level === 'roles') {
  logger.info('Generating keycloak routes with role protection');

  router.post('/api/dispatch', protectInternal('node-app-dispatch'));

  // Static data endpoints

  router.post('/api/product/create-multiple', protectInternal('user_static_data_manager'));
} else if (level === 'basic') {
  logger.info('Generating keycloak routes with basic protection');

  const { kcProtect } = require('../../app-core/keycloak/keycloak');
  router.use(kcProtect());
}
// We throw the error only if keycloak is enabled
else if (enabled) {
  // Error occuring during route generating
  // Using HttpError is irrelevant since it is not a request error
  // Not catched, we don't want the process to start if this error occurs
  throw new Error('Valid value for appConfig / featureSwitches.keycloak.level is required.');
}

module.exports = router;
