//jshint esversion: 6
const express     = require('express');
const app         = express();
const route       = express.Router();
const register    = require('./register.js');
const users       = require('./users.js');
const items       = require('./items.js');
const categories  = require('./categories.js');
const conditions  = require('./conditions.js');
const itemStatus  = require('./itemStatus.js');

route.use('/register', register);
route.use('/users', users);
route.use('/items', items);
route.use('/categories', categories);
route.use('/conditions', conditions);
route.use('/itemStatus', itemStatus);

module.exports = route;