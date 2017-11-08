const express = require('express');
const router = express.Router();

const db = require('../models');
const User = db.User;
const users = require('./users');


const passport = require('passport');
const bcrypt = require('bcrypt');
const saltRounds = 12;

//----------NAVIGATION MENU----------LOGIN/LOGOUT/REGISTER

//LogIN an authenticated user
router.post('/login',
  passport.authenticate('local', function(req, res) {
  let user = req.user;
  res.json(req.user);
}));

//LogOUT a user
router.get('/logout', (req, res) => {
  // let user = req.user;
  req.logout(); //fire logout request
  res.sendStatus(200); //fire status ok response
  // res.json(user);
});

router.post('/register', (req,res) => {
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      db.User.create({
        username: req.body.username,
        password: hash
      })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        console.log("error", err);
        return res.send('Stupid username');
      });
    });
  });
});

// router.get('/register', (req, res) => {
//   res.render('./register');
// });


// router.get('/login', (req, res) => {
//   res.render('./login');
// });
//-----------------------------------------------------------
module.exports = router;