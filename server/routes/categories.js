const express = require('express');
const router = express.Router();
const db = require('../models');
const Category = db.Category;

// fetching user routes
router.route('/')
.get((req, res) => {
 return Category.findAll()
 .then((categories) => {
    console.log('list of categories returned');
    return res.json(categories);
  });
});

module.exports = router;