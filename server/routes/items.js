
const express = require('express');
const db = require('../models');
const Item = db.Item;
const User = db.User;
const Category = db.Category;
const Condition = db.Condition;
const ItemStatus = db.ItemStatus;
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: './uploads',
  filename(req, file, cb){
    cb(null, `${file.originalname}`);
  }
});
const upload = multer({ storage });

router.route('/')
.get((req, res) => {
 return Item.findAll({
  include : [
    { model : Category, as : 'Category' },
    { model : Condition, as : 'Condition' },
    { model : ItemStatus, as : 'Status'},
    { model : User,
      as : 'User',
      attributes : {
          exclude : ['password']
      }
    }
  ]
 })
 .then((items) => {
    console.log('list of items returned');
    return res.json(items);
  })
 .catch((err) => {
    console.log(err);
    return res.json(err);
 });
})
.post(isAuthenticated, upload.single('file'), (req, res) => {
  const details = req.body;
  let file = req.file;

  return Item.create({
    file: details.file,
    name : details.name,
    description : details.description,
    manufacturer : details.manufacturer,
    modelname : details.modelname,
    price : details.price,
    category_id : details.category_id,
    condition_id : details.condition_id,
    is_sold : details.is_sold,
    user_id : details.user_id
  })
  .then((newItem) => {
    return newItem.reload({
      include : [
        { model : Category, as : 'Category' },
        { model : Condition, as : 'Condition' },
        { model : ItemStatus, as : 'Status'},
        { model : User,
          as : 'User',
          attributes : {
              exclude : ['password']
          }
        }
      ]
    });
  })
  .then(newItem => {
    return res.json(newItem);
  })
  .catch((err) => {
    console.log(err);
    return res.json(err);
  });
});

router.route('/:id')
.get((req, res) => {
  return Item.findById(req.params.id, {
    include : [
      { model : Category, as : 'Category' },
      { model : Condition, as : 'Condition' },
      { model : ItemStatus, as : 'Status'},
      { model : User,
        as : 'User',
        attributes : {
            exclude : ['password']
        }
      }
    ]
  })
  .then((itemDetails) => {
    return res.json(itemDetails);
  })
  .catch((err => {
    console.log(err);
    return res.json (err);
  }));
});


function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { next(); }
  else { res.json({ error : 'Bad Request' }); }
};



module.exports = router;
