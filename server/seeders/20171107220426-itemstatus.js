'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('itemstatuses',[{
  "title": "sold",
  "createdAt": "8/31/2017",
  "updatedAt": "7/23/2017"
}, {
  "title": "published",
  "createdAt": "12/19/2016",
  "updatedAt": "11/23/2016"
}] , {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('itemstatuses',null )
  }
};