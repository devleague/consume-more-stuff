const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const route                   = express.Router();
const db                      = require('../models');
const {user}                  = db;

//LOGIN ROUTE
route.get('/login',(req,res)=>{
  let value = req.isAuthenticated();
  console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  console.log("REQ.USER***********************",req.user);
  return res.json(req.user);
});

route.post('/login',isAuthenticated, function(req, res, next) {
  console.log(req.body);
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }//send fail message - logged in false //some error reason
    if (!user) { return res.json('false - not a user'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      let local = {}
      local.id = req.user.id;
      local.username = req.user.username;
      return res.json(local);
    });
  })(req, res, next);
});

function isAuthenticated(req, res, next){

    req.isAuthenticated();
    next();

}


module.exports = route;