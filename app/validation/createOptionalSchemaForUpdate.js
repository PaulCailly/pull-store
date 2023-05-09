// const logger = require('../../app-core/logger/logger')(module.filename);

const setRecursiveSchemaOptionalAllowUnknownKeys = (originalSchema, item) => {
  // logger.debug('Trying to set attributes optional on item of type: ' + item);
  let i = 0;
  if (originalSchema.$_terms.keys === null) {
    return originalSchema.optional();
  } else {
    const schemaKeys = originalSchema.$_terms.keys.map((schema) => {
      if (schema.schema.type === 'object') {
        originalSchema.$_terms.keys[i].schema = setRecursiveSchemaOptionalAllowUnknownKeys(
          schema.schema,
          item + '.' + originalSchema.$_terms.keys[i].key
        );
      }
      i++;
      return schema.key;
    });
    const newSchema = originalSchema.fork(schemaKeys, (schema) => schema.optional());
    return newSchema.unknown(true);
  }
};

module.exports = setRecursiveSchemaOptionalAllowUnknownKeys;
