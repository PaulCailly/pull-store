const logger = require('../../../app-core/logger/logger')(module.filename);
const mongodb = require('mongodb');

const getWithPagination = (paginationData) => {
  const filter = {};
  let useFilter = true;
  const page = paginationData.page ?? 0;
  const size = paginationData.size ?? 0;
  const paginationDataSort = paginationData.sort ?? [];
  const rules = paginationData.rules ?? (useFilter = false);

  // Confirming the sort to the mongodb language
  logger.info('Confirming ascending sort or descending');
  const sort = {};
  paginationDataSort.forEach((sortingRule) => {
    const sortingName = `${sortingRule.value}`;
    sort[sortingName] = sortingRule.ascending ? 1 : -1;
  });

  // Confirming the filter (rules) to the mongodb language
  if (useFilter) {
    logger.info('Starting to configure the rules (filters) to mongoDB language');
    if (rules !== null) {
      const andFilters = [];
      rules.forEach((andRule) => {
        const operations = [];
        andRule.forEach((rule) => {
          const editedRule = {};
          const name = rule.name;
          const tempValue = rule.value;

          // In case that we have an array as rule and ids with mongoDB format
          let value;
          if (Array.isArray(tempValue) && name === '_id') {
            const ids = tempValue.map((id) => {
              return new mongodb.ObjectId(id);
            });
            value = ids;
          } else if (name === '_id') {
            const id = new mongodb.ObjectId(tempValue);
            value = id;
          } else value = tempValue;

          switch (rule.operation) {
            case 'eq':
              editedRule[name] = { $eq: value };
              break;
            case 'regex':
              editedRule.$expr = {
                $regexMatch: {
                  input: { $toString: `$${name}` },
                  regex: value,
                  options: 'i',
                },
              };
              break;
            case 'gt':
              editedRule[name] = { $gt: value };
              break;
            case 'lt':
              editedRule[name] = { $lt: value };
              break;
            case 'gte':
              editedRule[name] = { $gte: value };
              break;
            case 'lte':
              editedRule[name] = { $lte: value };
              break;
            case 'in':
              editedRule[name] = { $in: value };
              break;
            default:
              throw new Error('Operation does not exist');
          }
          operations.push(editedRule);
        });
        andFilters.push({ $and: operations });
      });
      filter.$or = andFilters;
    }
  }
  return { page, size, sort, filter };
};

const urlItemToCamelCase = (str, separator) => {
  let result = '';
  const separatedString = str.split(separator);
  if (separatedString.length > 1) {
    let count = 0;
    separatedString.forEach((word) => {
      if (count === 0) {
        const firstLetter = word[0].toLowerCase();
        word[0] = firstLetter;
        result += firstLetter + word.slice(1, word.length);
      } else {
        const firstLetter = word[0].toUpperCase();
        word[0] = firstLetter;
        result += firstLetter + word.slice(1, word.length);
      }
      count++;
    });
  } else {
    const firstLetter = str[0].toLowerCase();
    str[0] = firstLetter;
    result = firstLetter + str.slice(1, str.length);
  }
  // logger.debug(result);
  return result;
};

module.exports = { getWithPagination, urlItemToCamelCase };
