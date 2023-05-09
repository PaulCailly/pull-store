const HttpError = require('../../../../app-core/httpErrors/httpErrorClass');
const logger = require('../../../../app-core/logger/logger')(module.filename);
const { client } = require('../../../../app-core/database/mongoNative/dbStart');
const { getWithPagination } = require('../../functions/utils');

const getDistinctValues = async (actualItem, serviceReq) => {
  let pluralActualItem = actualItem + 's';
  if (actualItem === 'source-entry') pluralActualItem = 'source-entries';
  try {
    const payload = serviceReq.payload;
    const distinctValues = serviceReq.payload.distinctValuesFor;
    logger.info(`Looking for all distinctValues based on : ${distinctValues}`);
    logger.debug(`Connection to mongodb`);

    const database = client.db();
    const currentItem = database.collection(pluralActualItem);

    const pagination = payload.pagination ?? {};
    const { page, size, filter } = getWithPagination(pagination);

    logger.debug(`Looking for distinctValues into the MongoDB`);

    const refactoredDistinctValues = {};

    distinctValues.forEach((distinctValue) => {
      let distinctValueParts = distinctValue;
      if (distinctValueParts.includes('.'))
        distinctValueParts = distinctValueParts.replaceAll('.', '-');
      refactoredDistinctValues[distinctValueParts] = '$' + distinctValue;
    });

    // Because of using aggregation with $group, we have to modify the way to sort by adding this _id. to the sorting name
    // This because we name items _id inside $group
    const sort = {};
    const paginationSort = pagination.sort ?? [];
    paginationSort.forEach((sortingRule) => {
      sortingRule.value = sortingRule.value.replace('.', '-');
      const sortingName = `_id.${sortingRule.value}`;
      sort[sortingName] = sortingRule.ascending ? 1 : -1;
    });

    const aggregationArray = [
      { $match: filter },
      { $group: { _id: refactoredDistinctValues } },
      { $skip: page * size },
    ];

    if (paginationSort.length > 0) aggregationArray.push({ $sort: sort });

    if (size !== 0) aggregationArray.push({ $limit: size });

    let itemCount = 0;

    try {
      const { count } = await currentItem
        .aggregate([
          { $match: filter },
          { $group: { _id: refactoredDistinctValues } },
          {
            $count: 'count',
          },
        ])
        .next();
      itemCount = count;
    } catch (error) {
      logger.warn('Database is empty so we cannot have the count');
    }
    const foundRetrievedValues = await currentItem.aggregate(aggregationArray).toArray();

    logger.debug(`Returning distinctValues we found`);
    logger.debug(`distinctValues : ${foundRetrievedValues}`);

    const foundDistinctValues = foundRetrievedValues.map((retrievedValue) => {
      const refactoredFoundRetrievedValue = {};
      Object.keys(retrievedValue._id).forEach((key) => {
        let replacedKey = key;
        if (replacedKey.includes('-')) replacedKey = replacedKey.replaceAll('-', '.');
        refactoredFoundRetrievedValue[replacedKey] = retrievedValue._id[key];
      });
      return refactoredFoundRetrievedValue;
    });

    const newPayload = {
      request: {
        filter: pagination.rules,
        distinctValuesFor: distinctValues,
      },
      result: {
        count: itemCount,
        data: foundDistinctValues,
      },
    };

    if (foundDistinctValues.length === 0) {
      return {
        serviceReqId: serviceReq.serviceReqId,
        serviceReqMessage: 'We do not find any distinctValues',
        serviceReqCode: 0,
        payload: newPayload,
      };
    } else {
      return {
        serviceReqId: serviceReq.serviceReqId,
        serviceReqMessage: 'distinctValues successfully retrieved',
        serviceReqCode: 1,
        payload: newPayload,
      };
    }
  } catch (error) {
    logger.error(`Something went wrong looking for distinctValues from the MongoDB`);
    logger.error(`error : ${error}`);
    throw new HttpError('internalError', error.message, error.stack);
  }
};

module.exports = getDistinctValues;
