const express = require('express');
const Item = require('../db/models/Item');
const User = require('../db/models/User');
const UserStatus = require('../db/models/UserStatus');
const authenticate = require('../isAuthenticated');
const authorize = require('../isAuthorized');

const router = express.Router();

router.route('/:id/settings/')
  .get(authenticate, (req, res) => {
    let userId = req.params.id;

    if (req.user.id !== userId) {
      return res.json({message: 'Unauthorized'})
    } else {

    return new User({id: userId})
      .fetch({withRelated: ['userStatus']}) 
      .then(user => {
        return res.json(user)
      })
      .catch(err => {
        return res.json({message: err.message})
      })
    }
  })

router.route('/:id/inactive/')
  .put(authenticate, (req, res) => {
    let userId = req.params.id;
    
    if (!authorize(req.user.id, userId)) {
      return res.json('User not authorized')
    } else {

    return new User({id: userId})
      .save({user_status_id: 2})
      .then(status => {
        return res.json({success: true})
      })
      .catch(err => {
        return res.json({message: err.message})
      })
    }
  })

router.route('/:id')
  .get(authenticate, (req, res) => {
    let userId = req.params.id;
    
    if (!authorize(req.user.id, userId)) {
      return false
    } else {
    return new Item()
      .query({where: {user_id: userId}})
      .fetchAll({withRelated: ['user','condition', 'category', 'itemStatus']})
      .then(user => {
        return res.json(user)
      })
      .catch(err => {
        return res.json({
          message: err.message
        })
      })
    }
  })

module.exports = router;