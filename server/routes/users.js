const express = require('express');
const router = express.Router();
const db = require('../models');
const User = db.User;
const Item = db.Item;

// fetching user routes
router.route('/')
.get((req, res) => {
 return User.findAll({
  attributes : {
    exclude : ['password']
  },
  include : [
    { model : Item }
  ]
 })
 .then((users) => {
    console.log('list of users returned');
    return res.json(users);
  });
});

router.route('/:id')
.get((req, res) => {
  return User.findById(req.params.id, {
    attributes : {
      exclude : ['password']
    },
    include : [
      { model : Item }
    ]
  })
  .then((userDetails) => {
    console.log('User found');
    return res.json(userDetails);
  });
});

module.exports = router;