// This is a form validation middleware that uses the npm package Joi
const Joi = require('joi');
// specifies that it must be an object
const registrationSchema = Joi.object()
// specifies what keys it will have
// specifies what is required of key values
.keys({
  email: Joi.string().lowercase().email().required(),
  username: Joi.string().lowercase().alphanum().min(3).max(20).required(),
  password: Joi.string().alphanum().min(5).max(30).required(),
});

module.exports = (req, res, next) => {
  // if no error exists next middleware
  if (!Joi.validate(req.body, registrationSchema).error) {
    next();
  // if invalid don't continue to next middleware 
  } else { res.json({ error : 'Invalid input!' }); }
};