const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const db = require('../models');
const User = db.User;
const saltRounds = 12;

const router = express.Router();

//----------NAVIGATION MENU----------LOGIN/LOGOUT/REGISTER

//LogIN an authenticated user
router.post('/login',
  passport.authenticate('local', (req, res) => {
  // if authentication is successful this will be sent
  // front end should check if returned object has a success key with true
  res.json({
    id : req.user.id,
    username : req.user.username,
    success : true
  });
}));

//LogOUT a user
router.get('/logout', (req, res) => {
  req.logout(); //fire logout request
  res.sendStatus(200)
     .json({ success : true }); //fire status ok response
});

router.post('/register', (req,res) => {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      User.create({
        username: req.body.username,
        password: hash
      })
      .then((user) => {
        // don't return ALL user details, especially password\
        // what details does the user object carry?
        return res.json({
          success : true
        });
      })
      .catch((err) => {
        console.log("error", err);
        return res.json({
          success : false
        });
      });
    });
  });
});

module.exports = router;