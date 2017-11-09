const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const route                   = express.Router();
const db                      = require('../models');
const {category}              = db;



route.get('/', ( req, res ) => {
  let value = req.isAuthenticated();
   //console.log('Is the current user authenticated:',(value ? 'Yes Baseem' : 'No Baseem'),'the current REQ.USER:',req.user);
  //console.log('category route has been requested: GET ');
  category.findAll({raw:true})
  .then((DataCollection) => {
    // console.log('category route has queried all data from the DB, result: ', DataCollection);
    res.json(DataCollection);
  });
});

route.post('/new', ( req, res ) => {
  let value = req.isAuthenticated();
  //console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  //console.log('category route has been requested: POST ');
  category.create({
    title : req.body.title
  }).then((data) => {
    res.json(data);
  });
});

route.get('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  //console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  //console.log('category ID route has been requested: GET ');
  let id = req.params.id;
  //console.log('category.get/:id :', id);
  category.findById(id)
  .then((data) => {
    console.log('category ID route has been requested:, result: ', data);
    res.json(data);
  });
});



route.put('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  //console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  //console.log('category ID route has been requested: PUT ');
  let id = req.params.id;
  //console.log('category.put/:id :', id);
  let data = req.body;
  return category.update({
    title: req.body.title
  }, {where     : [{id: id}],
      returning : true,
      plain     : true
  }).then((category) => {
    res.json(category);
  });
});

route.delete('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  //console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  //console.log('category ID route has been requested: DELETE ');
  let id = req.params.id;
  //console.log('category.delete/:id :', id);
  let data = req.body;
  //console.log('category.delete/:id data :', data);
  return category.update({
    title: 'deprecated'
  }, {where     : [{id: id}],
      returning : true,
      plain     : true
  }).then((category) => {
    res.json(category);
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