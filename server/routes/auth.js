const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const session = require('express-session');
const db = require('../models');
const validateForm = require('../lib/validate-form');
const User = db.User;
const saltRounds = 12;

const router = express.Router();
//----------NAVIGATION MENU----------LOGIN/LOGOUT/REGISTER

//LogIN an authenticated user
router.post('/login',
  passport.authenticate('local'), (req, res) => {
    console.log(res.user);
  // if authentication is successful this will be sent
  // front end should check if returned object has a success key with true
  return res.json({
    id : req.user.id,
    username : req.user.username,
    role : req.user.role,
    success : true
  });
});

//LogOUT a user
router.get('/logout', (req, res) => {
  console.log("Serverside hitting Logout");
  req.logout(); //fire logout request
  res.sendStatus(200);
});

router.post('/register', validateForm, (req, res) => {
  const { email, username } = req.body;
  // need to check if user already exists first
  return User.findOne({
    where : { $or : [ { username : username }, { email : username } ] },
    attributes: { exclude: ['password'] }
  })
  .then(response => {
    // if user does not exist, findOne will return null
    // if user does exist, user details will be returned
    if (response) {
      res.json({
        error: 'Sorry, that username/email is already in use!'
      });

    } else {
      bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          User.create({
            email: email,
            username: username,
            password: hash,
            role: 2
          })
          .then((newUserDetails) => {
            console.log('new user registered');
            return res.json({
              id : newUserDetails.id,
              username : newUserDetails.username,
              success : true
            });
          });
        });
      });
    }
  })
  .catch((err) => {
    console.log("error", err);
    return res.json({
      error : 'Oh no! Something went wrong!'
    });
  });
});

module.exports = router;