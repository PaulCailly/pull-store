const setHeaderVariables = (req, res, next) => {
  // Retrieve the actualItem from the URL
  let actualItem = req.url.split('/')[2];
  actualItem = actualItem.split('?')[0];
  actualItem = actualItem.split('-summary')[0];
  req.headers.actualItem = actualItem;
  next();
};

module.exports = setHeaderVariables;
