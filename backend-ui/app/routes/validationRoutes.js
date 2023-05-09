const router = require('express').Router();

const reqValidation = require('../../app-core/middleWares/validationMiddleWare/reqValidation');
const { postDispatchSchema } = require('../validation/validationSchemas');

router.post('/api/dispatch', reqValidation(postDispatchSchema, 'body'));

module.exports = router;
