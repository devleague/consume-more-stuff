const express                 = require('express');
const app                     = express();
const passport                = require('passport');
const bcrypt                  = require('bcrypt');
const LocalStrategy           = require('passport-local').Strategy;
const saltRounds              = 12;
const route                   = express.Router();
const db                      = require('../models');
const {item}                 = db;


const multer = require('multer');
const storage = multer.diskStorage({
  destination: './uploads/items',
  filename(req, file, cb){
    cb(null, `${file.originalname}`);
  }
})
const upload = multer({ storage });


const User = db.user;
const Category = db.category;
const Condition = db.condition;
const ItemStatus = db.itemstatus;



route.get('/', ( req, res ) => {
  let value = req.isAuthenticated();
  //console.log('Is the current user authenticated:',(value ? 'Yes Baseem' : 'No Baseem'),'the current REQ.USER:',req.user);
  //console.log('items route has been requested: GET ');
  item.findAll({
    include:[
      { model: User, as: 'seller' },
      { model: Category, as: 'itemcategory'},
      { model: Condition, as: 'itemcondition'},
      { model: ItemStatus, as: 'itemstatus'}
    ]
  })
  .then((DataCollection) => {
    // console.log('items route has queried all data from the DB, result: ', DataCollection);
    res.json(DataCollection);
  });
});

route.get('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  //console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  //console.log('items ID route has been requested: GET ');
  let id = req.params.id;
  //console.log('items.get/:id :', id);
  item.findById(id)
  .then((data) => {
    console.log('items ID route has been requested:, result: ', data);
    res.json(data);
  });
});

route.post('/', upload.single('file'), ( req, res ) => {
  let value = req.isAuthenticated();

  let file = req.file;

  item.create({
    name : req.body.name,
    description : req.body.description,
    price    : req.body.price,
    manufacturer : req.body.manufacturer,
    model : req.body.model,
    dimensions    : req.body.dimensions,
    notes : req.body.notes,
    image    : req.file.path,
    categoryId : req.body.category,
    conditionId : req.body.condition,
    userId : req.user.id,
    itemstatusId: 1
  }).then((data) => {
      return item.findOne({
        where: {
          id: data.id
        },
        include: [
        { model: User, as: 'seller' },
        { model: Category, as: 'itemcategory'},
        { model: Condition, as: 'itemcondition'},
        { model: ItemStatus, as: 'itemstatus'}
        ]
      })
    .then((item) => {
      return res.json(item);
    })
  })
  .catch((err) => {
    console.log(err)
  })
});

route.put('/:id', ( req, res ) => {
  let value = req.isAuthenticated();

  let id = req.params.id;
  //console.log('items.put/:id :', id);
  let data = req.body;
  return item.update({
    name : req.body.name,
    description : req.body.description,
    price    : req.body.price,
    manufacturer : req.body.manufacturer,
    model : req.body.model,
    dimensions    : req.body.dimensions,
    notes : req.body.notes,
    image    : req.body.image
  }, {where     : [{id: id}],
      returning : true,
      plain     : true
  }).then((item) => {
    res.json(item);
  });
});

route.delete('/:id', ( req, res ) => {
  let value = req.isAuthenticated();
  //console.log('Is the current user authenticated: ', (value ? 'Yes Baseem' : 'No Baseem'));
  //console.log('items ID route has been requested: DELETE ');
  let id = req.params.id;
  //console.log('items.delete/:id :', id);
  let data = req.body;
  //console.log('items.delete/:id data :', data);
  return item.update({
    notes: 'deprecated'
  }, {where     : [{id: id}],
      returning : true,
      plain     : true
  }).then((item) => {
    res.json(item);
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