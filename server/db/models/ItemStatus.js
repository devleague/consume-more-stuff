const bookshelf = require('./bookshelf');


class ItemStatus extends bookshelf.Model {
  get tableName() {return 'item_status'}

  item() {
    return this.hasMany('Item');
  }
}


module.exports = bookshelf.model('ItemStatus', ItemStatus);