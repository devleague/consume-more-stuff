const express = require('express');
const auth = require('./auth');
const categories = require('./categories');
const conditions = require('./conditions');
const items = require('./items');
const users = require('./users');
const statuses = require('./statuses');

const router = express.Router();

<<<<<<< HEAD
router.use('/users', users);
router.use('/items', items);
// router.use('/auth', auth);
=======
router.use('/auth', auth);
router.use('/categories', categories);
router.use('/conditions', conditions);
router.use('/items', items);
router.use('/users', users);
router.use('/statuses', statuses);
>>>>>>> development

module.exports = router;