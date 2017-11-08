const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const route                   = express.Router();
const db                      = require('../models');
const {user}                  = db;

//REGISTER ROUTE
route.get('/',(req,res)=>{
  res.json('Welcome to the api Registration page');
});

route.post('/', (req,res) =>{
  bcrypt.genSalt(saltRounds, function(err,salt){
    bcrypt.hash(req.body.password, salt, function(err, hash){
      db.user.create({
        username: req.body.username,
        password: hash,
        email: req.body.email,
        userstatus: (req.body.email ? 'active' : 'inactive')
      })
      .then( (user) => {
        console.log(user);
        res.json('user successfully added');
      })
      .catch((err) => {
        return res.json('Username has been taken'); 
      });
    });
  });
});

function isAuthenticated(req, res, next){
  console.log("REQ.USER.ID***********************",req.user.id,"***********************");
  let id = parseInt(req.params.id);
  let userId = parseInt(req.user.id);
  //console.log(id === userId);
  if(id === req.user.id){
    console.log("They Match - TRUE access GRANTED******************")
    req.isAuthenticated();
    next();
  }
  else{
    res.redirect('/');
    console.log('denied');}
}

module.exports = route;
