const express = require('express');
const users = require('./users');
const items = require('./items');


const router = express.Router();

router.use('/users', users);
router.use('items', items);


module.exports = router;