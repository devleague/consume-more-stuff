'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('conditions',[{
  "title": "used",
  "createdAt": "8/17/2017",
  "updatedAt": "9/1/2017"
}, {
  "title": "fair",
  "createdAt": "3/2/2017",
  "updatedAt": "8/29/2017"
}, {
  "title": "good",
  "createdAt": "8/21/2017",
  "updatedAt": "8/24/2017"
}, {
  "title": "new",
  "createdAt": "9/23/2017",
  "updatedAt": "8/8/2017"
}] , {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('conditions',null )
  }
};