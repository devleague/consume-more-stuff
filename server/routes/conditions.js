const express = require('express');
const router = express.Router();
const db = require('../models');
const Condition = db.Condition;

// fetching user routes
router.route('/')
.get((req, res) => {
 return Condition.findAll()
 .then((conditions) => {
    console.log('list of conditions returned');
    return res.json(conditions);
  });
});

module.exports = router;