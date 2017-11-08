const express = require('express');
const router = express.Router();
const db = require('../models');
const ItemStatus = db.ItemStatus;

// fetching user routes
router.route('/')
.get((req, res) => {
 return ItemStatus.findAll()
 .then((statuses) => {
    console.log('list of statuses returned');
    return res.json(statuses);
  });
});

module.exports = router;