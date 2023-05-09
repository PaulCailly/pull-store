const router = require('express').Router();

// const fileCreatorProxy = require('../middlewares/fileCreatorProxy/httpProxy');
// const orchestratorProxy = require('../middlewares/orchestratorProxy/httpProxy');
const pullStoreProxy = require('../middlewares/pullStoreProxy/httpProxy');
// const fileBuilderProxy = require('../middlewares/fileBuilderProxy/httpProxy');

// router.get('/api/orchestrate/create-new-invoices', orchestratorProxy);
// router.get('/api/orchestrate/create-new-invoice-files', orchestratorProxy);
// router.get('/api/orchestrate/create-new-payment-requests', orchestratorProxy);
// router.get('/api/orchestrate/create-new-payment-request-files', orchestratorProxy);
// router.post('/api/orchestrate/create-new-dispatch', orchestratorProxy);

router.post('/api/dispatch', pullStoreProxy);
// router.post('/api/product/get-selected-columns', pullStoreProxy);
// router.post('/api/product/get-distinct-values', pullStoreProxy);
// router.post('/api/source-entry/get-selected-columns', pullStoreProxy);
// router.post('/api/invoice/get-selected-columns', pullStoreProxy);
// router.post('/api/payment-request/get-selected-columns', pullStoreProxy);
// router.get('/api/destination', pullStoreProxy);
// router.post('/api/destination', pullStoreProxy);
// router.post('/api/destination/get-selected-columns', pullStoreProxy);
// router.put('/api/destination', pullStoreProxy);
// router.delete('/api/destination/:id', pullStoreProxy);
// router.post('/api/dispatch-setting', pullStoreProxy);
// router.post('/api/dispatch-setting/get-selected-columns', pullStoreProxy);
// router.put('/api/dispatch-setting', pullStoreProxy);
// router.delete('/api/dispatch-setting/:id', pullStoreProxy);

// router.post('/api/invoice-file/create-on-demand', fileCreatorProxy);
// router.post('/api/payment-request-file/create-on-demand', fileCreatorProxy);
// router.post('/api/invoice-file/create-csv-on-demand', fileCreatorProxy);
// router.post('/api/payment-request-file/create-csv-on-demand', fileCreatorProxy);
// router.post('/api/source-file/create-csv-on-demand', fileCreatorProxy);
// router.post('/api/source-entry-file/create-csv-on-demand', fileCreatorProxy);
// router.post('/api/invoice-file/create-accounting-csv-on-demand', fileCreatorProxy);

// Static data routes

// router.post('/api/product/create-multiple', pullStoreProxy);
// router.post('/api/payment-term/create-multiple', pullStoreProxy);
// router.post('/api/dispatch-setting/create-multiple', pullStoreProxy);
// router.post('/api/destination/create-multiple', pullStoreProxy);

// router.post('/api/res/zip', fileBuilderProxy);
// router.post('/api/pdf/template/zip', fileBuilderProxy);

// router.post('/api/sequence', pullStoreProxy);

module.exports = router;
