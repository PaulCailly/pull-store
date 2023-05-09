const returnPostPayloadSchema = (item) => {
  const itemPayload = require(`../businessObject/structure/${item}`);
  return itemPayload;
};

module.exports = returnPostPayloadSchema;
