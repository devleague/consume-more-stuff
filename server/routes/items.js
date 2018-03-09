const express = require('express');
const Item = require('../db/models/Item');
const Category = require('../db/models/Category');
const User = require('../db/models/User');
const Condition = require('../db/models/Condition');
const ItemStatus = require('../db/models/ItemStatus');
const auth = require('../isAuthenticated');

const router = express.Router();

router.route('/categories/:id')
.get((req, res) => {
  let categoryId = req.params.id;
    return new Category({
      id: categoryId
    })
      .fetch({withRelated: ['item']})
      .then(items => {
        return res.json(items)
      })
      .catch(err => {
        return res.json({message: err.message})
      })
  })

  router.route('/conditions/:id')
  .get((req, res) => {
    let conditionId = req.params.id;
      return new Condition({
        id: conditionId
      })
        .fetch({withRelated: ['item']})
        .then(items => {
          return res.json(items)
        })
        .catch(err => {
          return res.json({message: err.message})
        })
    })

  router.route('/item_status/:id')
    .get((req, res) => {
      let itemStatusId = req.params.id;
        return new ItemStatus({
          id: itemStatusId
        })
          .fetch({withRelated: ['item']})
          .then(items => {
            return res.json(items)
          })
          .catch(err => {
            return res.json({message: err.message})
          })
      })

router.route('/new')
.post(auth, (req, res) => {
    let data = {
      name, price, category_id, condition_id, item_status_id, model, dimensions,
       notes, image
    } = req.body;
    data.user_id = req.user.id
    return new Item(data)
      .save()
      .then(item => {
        return res.json(item)
      })
      .catch(err => {
        return res.json({
          message: err.message
        })
      })
  })

router.route('/:id')
  .get((req, res) => {

    let itemId = req.params.id;

    return new Item({
        id: itemId
      })
      .fetch({withRelated: ['user', 'condition','category', 'itemStatus']})
      .then(item => {
        return res.json(item)
      })
      .catch(err => {
        return res.json({
          message: err.message
        })
      })
  })
  .put(auth, (req, res) => {
    if (req.user.id !== req.body.user_id) {
      console.log('User does not own item')
      return res.json({message: 'User does not own item'})
    } else {

    let itemId = req.params.id;

    let data = {
      name, price, category_id, condition_id, item_status_id, model, dimensions,
       notes, image
    } = req.body;

    return new Item({
        id: itemId
      })
      .save(data, {
        patch: false
      })
      .then(item => {
        return res.json(item)
      })
      .catch(err => {
        return res.json({
          message: err.message
        })
      })
    }
  })

router.route('/')
  .get((req, res) => {
    return new Item()
      .fetchAll({withRelated: ['category', 'user', 'condition', 'itemStatus']})
      .then(items => {
        return res.json(items)
      })
      .catch(err => {
        return res.json({message: err.message})
      })
  })

module.exports = router;