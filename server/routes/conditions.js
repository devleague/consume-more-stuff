const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const route                   = express.Router();
const db                      = require('../models');
const {condition}                 = db;



route.get('/', ( req, res ) => {
  let value = req.isAuthenticated();
  //console.log('Is the current user authenticated:',(value ? 'Yes Baseem' : 'No Baseem'),'the current REQ.USER:',req.user);
  //console.log('conditions route has been requested: GET ');
  condition.findAll({raw:true})
  .then((DataCollection) => {
    // console.log('conditions route has queried all data from the DB, result: ', DataCollection);
    res.json(DataCollection);
  });
});

route.post('/new', ( req, res ) => {
  let value = req.isAuthenticated();
  //console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  //console.log('conditions route has been requested: POST ');
  condition.create({
    title : req.body.title
  }).then((data) => {
    // console.log('conditions route has posted new data to the DB, result: ', data);
    res.json(data);
  });
});

route.get('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  //console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  //console.log('conditions ID route has been requested: GET ');
  let id = req.params.id;
  //console.log('conditions.get/:id :', id);
  condition.findById(id)
  .then((data) => {
    console.log('conditions ID route has been requested:, result: ', data);
    res.json(data);
  });
});

route.put('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  //console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  //console.log('conditions ID route has been requested: PUT ');
  let id = req.params.id;
  //console.log('conditions.put/:id :', id);
  let data = req.body;
  return condition.update({
    title: req.body.title
  }, {where     : [{id: id}],
      returning : true,
      plain     : true
  }).then((condition) => {
    res.json(condition);
  });
});

route.delete('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  //console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  //console.log('conditions ID route has been requested: DELETE ');
  let id = req.params.id;
  //console.log('conditions.delete/:id :', id);
  let data = req.body;
  //console.log('conditions.delete/:id data :', data);
  return condition.update({
    title: 'deprecated'
  }, {where     : [{id: id}],
      returning : true,
      plain     : true
  }).then((condition) => {
    res.json(condition);
  })
});

function isAuthenticated(req, res, next){
  //console.log("REQ.USER.ID***********************",req.user.id,"***********************");
  let id = parseInt(req.params.id);
  let userId = parseInt(req.user.id);
  //console.log(id === userId);
  if(id === req.user.id){
    //console.log("They Match - TRUE access GRANTED******************")
    req.isAuthenticated();
    next();
  }
  else{
    res.redirect('/');
    console.log('denied');}
}


module.exports = route;