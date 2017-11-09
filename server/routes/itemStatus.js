const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const route                   = express.Router();
const db                      = require('../models');
const {itemstatus}            = db;



route.get('/', ( req, res ) => {
  let value = req.isAuthenticated();
  //console.log('Is the current user authenticated:',(value ? 'Yes Baseem' : 'No Baseem'),'the current REQ.USER:',req.user);
  //console.log('itemstatus route has been requested: GET ');
  itemstatus.findAll({raw:true})
  .then((DataCollection) => {
    // console.log('itemstatus route has queried all data from the DB, result: ', DataCollection);
    res.json(DataCollection);
  });
});

route.get('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  //console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  //console.log('itemstatus ID route has been requested: GET ');
  let id = req.params.id;
  //console.log('itemstatus.get/:id :', id);
  itemstatus.findById(id)
  .then((data) => {
    console.log('itemstatus ID route has been requested:, result: ', data);
    res.json(data);
  });
});

route.post('/new', ( req, res ) => {
  let value = req.isAuthenticated();
  //console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  //console.log('itemstatus route has been requested: POST ');
  itemstatus.create({
    sold : req.body.sold,
    published : req.body.published
  }).then((data) => {
    //console.log('itemstatus route has posted new data to the DB, result: ', data);
    res.json(data);
  });
});

route.put('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  //console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  //console.log('itemstatus ID route has been requested: PUT ');
  let id = req.params.id;
  //console.log('itemstatus.put/:id :', id);
  let data = req.body;
  return itemstatus.update({
    sold : req.body.sold,
    published : req.body.published
  }, {where     : [{id: id}],
      returning : true,
      plain     : true
  }).then((status) => {
    res.json(status);
  });
});

route.delete('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  //console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  //console.log('itemstatus ID route has been requested: DELETE ');
  let id = req.params.id;
  //console.log('itemstatus.delete/:id :', id);
  let data = req.body;
  //console.log('itemstatus.delete/:id data :', data);
  return itemstatus.update({
    itemstatus: 'deprecated'
  }, {where     : [{id: id}],
      returning : true,
      plain     : true
  }).then((itemstatus) => {
    res.json(itemstatus);

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