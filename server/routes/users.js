const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const route                   = express.Router();
const db                      = require('../models');
const {user}                  = db;



route.get('/', ( req, res ) => {
  let value = req.isAuthenticated();
  //console.log('Is the current user authenticated:',(value ? 'Yes Baseem' : 'No Baseem'),'the current REQ.USER:',req.user);
  //console.log('users route has been requested: GET ');
  user.findAll({raw:true})
  .then((DataCollection) => {
    //console.log('users route has queried all data from the DB, result: ', DataCollection);
    res.json(DataCollection);
  });
});

route.get('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  //console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  //console.log('users ID route has been requested: GET ');
  let id = req.params.id;
  console.log('users.get/:id :', id);
  user.findById(id)
  .then((data) => {
    // console.log('users ID route has been requested:, result: ', data);
    res.json(data);
  });
});

route.post('/new', ( req, res ) => {
  let value = req.isAuthenticated();
  //console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  //console.log('users route has been requested: POST ');
  user.create({
    username : req.body.username,
    password : req.body.password,
    email    : req.body.email
  }).then((data) => {
    // console.log('users route has posted new data to the DB, result: ', data);
    res.json(data);
  });
});

route.put('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  //console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  //console.log('users ID route has been requested: PUT ');
  let id = req.params.id;
  console.log('users.put/:id :', id);
  console.log(req.body);
  return user.update({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    userstatus: req.body.userstatus
  }, {where     : [{id: id}],
      returning : true,
      plain     : true
  }).then((user) => {
    res.json(user);
  });
});

route.delete('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  //console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  //console.log('users ID route has been requested: DELETE ');
  let id = req.params.id;
  //console.log('users.update/:id :', id);
  let data = req.body;
  //console.log('users.update/:id data :', data);
  return user.update({
    userstatus: 'inactive'
  }, {where     : [{id: id}],
      returning : true,
      plain     : true
  }).then((user) => {
    res.json(user);

  })
});


function isAuthenticated(req, res, next){

    req.isAuthenticated();
    next();

}


module.exports = route;