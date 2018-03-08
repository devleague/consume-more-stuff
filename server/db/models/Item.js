const bookshelf = require('./bookshelf');

const User = require('../models/User');


class Item extends bookshelf.Model {
  get tableName() {return 'items'}
  get hasTimestamps() {return true}

  user() {
    return this.belongsTo('User', 'user_id')
  }

  condition() {
    return this.belongsTo('Condition', 'condition_id')
  }

  category() {
    return this.belongsTo('Category', 'category_id')
  }

  itemStatus() {
    return this.belongsTo('ItemStatus', 'item_status_id')
  }

}


module.exports = bookshelf.model('Item', Item);
