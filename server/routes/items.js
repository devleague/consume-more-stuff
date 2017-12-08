const express = require('express');
const db = require('../models');
const upload = require('../lib/upload');
const isAuthenticated = require('../lib/authenticate');

const Item = db.Item;
const User = db.User;
const Category = db.Category;
const Condition = db.Condition;
const ItemStatus = db.ItemStatus;

const router = express.Router();

router.route('/')
.get((req, res) => {
 return Item.findAll({
  where : { deletedAt : null },
  include : [
    { model : Category, as : 'Category' },
    { model : Condition, as : 'Condition' },
    { model : ItemStatus, as : 'Status'},
    { model : User, as : 'User',
      attributes : { exclude : ['password'] }
    }
  ],
  order : [[ 'createdAt', 'DESC' ]]
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
  let path = '';

  if (file) {
     path = file.path.split('/').slice(1).join('/');
  }

  return Item.create({
    category_id : details.category_id,
    condition_id : details.condition_id,
    description : details.description,
    dimensions : details.dimensions,
    imageUrl: path,
    is_sold : 1,
    name : details.name,
    notes : details.notes,
    manufacturer : details.manufacturer,
    model : details.model,
    price : details.price,
    user_id : req.user.id
  })
  .then((newItem) => {
    return newItem.reload({
      include : [
        { model : Category, as : 'Category' },
        { model : Condition, as : 'Condition' },
        { model : ItemStatus, as : 'Status'},
        { model : User, as : 'User',
          attributes : { exclude : ['password'] } }
      ]
    });
  })
  .then(newItem => {
    console.log('newitem created');
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
    where : { deletedAt : null },
    include : [
      { model : Category, as : 'Category' },
      { model : Condition, as : 'Condition' },
      { model : ItemStatus, as : 'Status'},
      { model : User, as : 'User',
        attributes : { exclude : ['password'] } },
    ]
  })
  .then((itemDetails) => {
    return res.json(itemDetails);
  })
  .catch((err => {
    console.log(err);
    return res.json (err);
  }));
})
.put(isAuthenticated, (req, res) => {
  let id = req.params.id;
  let details = req.body;

  return Item.findById(id)
  .then(itemToEdit => {
    // prevents a logged in user from deleting another user's post unless admin or the user that created the post
    if (req.user.id === itemToEdit.user_id ||
        req.user.role === 'admin') {
      return itemToEdit
      .update({
        category_id : details.category_id,
        condition_id : details.condition_id,
        description : details.description,
        dimensions : details.dimensions,
        // imageUrl: path ? file.path : '',
        is_sold : details.is_sold,
        name : details.name,
        notes : details.notes,
        manufacturer : details.manufacturer,
        model : details.model,
        price : details.price
      })
      .then((editedItem) => {
        console.log('reloading');

        return editedItem
        .reload({
          include : [
            { model : Category, as : 'Category' },
            { model : Condition, as : 'Condition' }
            // { model : ItemStatus, as : 'Status'},
            // { model : User, as : 'User',
          ]
        });
      })
      .then(updatedItemDetails => {
        console.log('item edited');
        res.json(updatedItemDetails);
      });
    }
  })
  .catch(err => {
    console.log(err);
    res.json(err);
  });
})
.delete(isAuthenticated, (req, res) => {
  let id = req.params.id;

  return Item.findById(id)
  .then(itemToDelete => {
    // prevents a logged in user from deleting another user's post unless admin or the user that created the post
    if (req.user.id === itemToDelete.user_id ||
        req.user.role === 'admin') {
      return itemToDelete.update({
        deletedAt: new Date()
      });
    }
  })
  .then(response => {
    console.log('deleted item');
    res.json({
      success: true
    });
  })
  .catch(err => {
    console.log(err);
    res.json(err);
  });
});

router.route('/:id/sold')
.put(isAuthenticated, (req, res) => {
  let id = req.params.id;

  return Item.findById(id)
  .then(soldItem => {
    // prevents a logged in user from deleting another user's post unless admin or the user that created the post
    if (req.user.id === soldItem.user_id ||
        req.user.role === 'admin') {
      return soldItem.update({
        is_sold : 2
      });
    }
  })
  .then(soldItemDetails => {
    console.log('item sold');
    res.json(soldItemDetails);
  })
  .catch(err => {
    console.log(err);
    res.json(err);
  });
});

module.exports = router;
