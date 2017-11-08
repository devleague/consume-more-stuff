const express = require('express');
const db = require('../models');
const Item = db.Item;
const User = db.User;
const Category = db.Category;
const Condition = db.Condition;
const ItemStatus = db.ItemStatus;

const router = express.Router();

router.route('/')
.get((req, res) => {
 return Item.findAll({
  include : [
      { model : User, as : 'User' },
      { model : Category, as : 'Category' },
      { model : Condition, as : 'Condition' },
      { model : ItemStatus, as : 'Status'}
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

.post((req, res) => {
  const details = req.body;

  return Item.create({
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
        { model : User, as : 'User' },
        { model : Category, as : 'Category' },
        { model : Condition, as : 'Condition' },
        { model : ItemStatus, as : 'Status' }
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
  return Item.findById(req.params.id)
  .then((itemDetails) => {
    console.log("Item found");
    return res.json(itemDetails);
  })
  .catch((err => {
    console.log(err);
    return res.json (err);
  }));
});

module.exports = router;
