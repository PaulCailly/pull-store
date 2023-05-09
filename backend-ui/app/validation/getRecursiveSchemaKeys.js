const _ = require('lodash');
const logger = require('../../app-core/logger/logger')(module.filename);
const getRecursiveSchemaKeys = (originalSchema, item, rootItem) => {
  logger.debug('get recursive attribute keys on item of type: ' + rootItem);
  let i = 0;
  let schemaKeys = [];
  let schemaKeys2 = [];
  if (originalSchema.$_terms.keys === null) {
    return schemaKeys;
  } else {
    schemaKeys = originalSchema.$_terms.keys.map((schema) => {
      if (schema.schema.type === 'object') {
        schemaKeys2 = _.concat(
          schemaKeys2,
          getRecursiveSchemaKeys(
            schema.schema,
            (item === '' ? '' : `${item}.`) + originalSchema.$_terms.keys[i].key,
            rootItem
          )
        );
      }
      i++;
      if (item === '') return schema.key;
      else return item + '.' + schema.key;
    });
    if (schemaKeys2.length > 0 && schemaKeys.length > 0)
      schemaKeys = _.concat(schemaKeys, schemaKeys2);
    return schemaKeys;
  }
};

module.exports = getRecursiveSchemaKeys;
