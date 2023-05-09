const HttpError = require('../httpErrors/httpErrorClass');
const logger = require('../logger/logger')(module.filename);

const checkReceivedRequests = (requests) => {
  logger.info('Check if each request have an ID and convert requests to an array');
  let servicesRequests = [];

  // CHECK IF SERVICE RECEIVE A SIMPLE OBJECT OR AN ARRAY
  if (typeof requests === 'object' && Array.isArray(requests)) {
    servicesRequests = requests;
    logger.debug(`Here are serviceRequests : ${servicesRequests}`);
  } else if (typeof requests === 'object') {
    servicesRequests.push(requests);
    logger.debug(`Here are serviceRequests : ${servicesRequests}`);
  } else {
    throw new HttpError('badRequest', 'Wrong service request format');
  }

  // CHECK IF REQUEST IDS EXIST
  const requestIdsOk = checkRequestIds(servicesRequests);
  return { servicesRequests, requestIdsOk };
};

const checkResponsesStatusCodes = (serviceRes) => {
  logger.debug('Check if each response is right (serviceReqCode 1)');
  let continueProcess = true;

  if (Array.isArray(serviceRes)) {
    serviceRes.forEach((response) => {
      if (response.serviceReqCode !== 1) continueProcess = false;
    });
  } else if (typeof serviceRes !== 'undefined') {
    if (serviceRes.serviceReqCode !== 1) continueProcess = false;
  }

  return continueProcess;
};

const checkNumberOfItems = (serviceRes) => {
  let multipleItems = false;
  if (Array.isArray(serviceRes)) {
    if (serviceRes.length > 1) multipleItems = true;
    else if (serviceRes.length === 1) {
      const payload = serviceRes[0].payload;
      if (Array.isArray(payload) && payload.length > 1 && typeof payload !== 'undefined') {
        multipleItems = true;
      }
    }
  }
  logger.debug(`Actual number of items is ok : ${multipleItems}`);
  return multipleItems;
};

const checkRequestIds = (requests) => {
  // CHECK IF REQUEST IDS EXIST
  let requestIdsOk = true;

  // CHECK IF REQUESTS IS AN ARRAY OR NOT THEN VERIFY IDS
  if (Array.isArray(requests)) {
    requests.forEach((request) => {
      if (typeof request.serviceReqId === 'undefined') requestIdsOk = false;
    });
  } else if (requests !== undefined) {
    // That means the requests are not empty
    if (typeof requests.serviceReqId === 'undefined') requestIdsOk = false;
  } else {
    // Reject the requests
    requestIdsOk = false;
  }

  logger.info(`Return all requests and each request have an id: ${requestIdsOk}`);
  return requestIdsOk;
};

module.exports = {
  checkReceivedRequests,
  checkResponsesStatusCodes,
  checkNumberOfItems,
  checkRequestIds,
};
