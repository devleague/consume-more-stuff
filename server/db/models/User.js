const bookshelf = require('./bookshelf');

class User extends bookshelf.Model {
  get tableName() {return 'users'}
  get hasTimestamps() {return true}

  item() {
    return this.hasMany('Item')
  }

  userStatus() {
    return this.belongsTo('UserStatus', 'user_status_id')
  }

}


module.exports = bookshelf.model('User', User);