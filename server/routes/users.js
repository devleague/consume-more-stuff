const express = require('express');
const router = express.Router();
const db = require('../models');
const user = db.User;


// fetching user routes 
router.get('/', (req,res)=> {
 return user.findAll().then((users) => {
    console.log(users, ' USERS ROUTER REPORTING IN');
    return res.json(users);
  });
});


router.post('/register', (req, res) => {
  console.log(req.body, "THIS IS THE REQ BODY FOR REGISTER! ");
  users.create({
    username: req.body.username,
    password: req.body.password
  })
  .then( (user) => {
    res.json(user);
  })
  .catch( (err) => {
    res.json(err);
  });
});

module.exports = router;