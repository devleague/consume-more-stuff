const bookshelf = require('./bookshelf');


class UserStatus extends bookshelf.Model {
  get tableName() {return 'user_status'}


  user() {
    return this.hasMany('User');
  }

}

module.exports = bookshelf.model('UserStatus', UserStatus);