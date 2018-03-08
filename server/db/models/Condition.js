const bookshelf = require('./bookshelf');


class Condition extends bookshelf.Model {
  get tableName() {return 'conditions'}

  item() {
    return this.hasMany('Item');
  }
}


module.exports = bookshelf.model('Condition', Condition);