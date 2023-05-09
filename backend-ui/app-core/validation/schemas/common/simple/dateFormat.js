const Joi = require('joi');

// Please don't remove this comment to allow escape character for / in pattern for date format in husky validation
// eslint-disable-next-line
const schema = Joi.string().pattern(
  /(^D{2}\/M{2}\/Y{2}$)|(^D{2}\/M{2}\/Y{4}$)|(^M{2}\/D{2}\/Y{2}$)|(^M{2}\/D{2}\/Y{4}$)|(^Y{2}\/M{2}\/D{2}$)|(^Y{4}\/M{2}\/D{2}$)|(^D{2}-M{2}-Y{2}$)|(^D{2}-M{2}-Y{4}$)|(^M{2}-D{2}-Y{2}$)|(^M{2}-D{2}-Y{4}$)|(^Y{2}-M{2}-D{2}$)|(^Y{4}-M{2}-D{2}$)/,
  {
    name: 'Date format',
  }
);

module.exports = schema;
