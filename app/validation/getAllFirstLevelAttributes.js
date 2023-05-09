const getFirstLevelAttributes = (item) => {
  const array = [];
  const itemPayload = require(`../../app-core/validation/schemas/businessObject/structure/${item}`);
  if (itemPayload.$_terms.keys === null) {
    return array;
  } else {
    const schemaKeys = itemPayload.$_terms.keys.map((schema) => {
      return schema.key;
    });
    return schemaKeys;
  }
};

module.exports = getFirstLevelAttributes;
