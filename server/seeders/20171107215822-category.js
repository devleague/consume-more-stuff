'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories',[{
  "title": "computers",
  "createdAt": "6/23/2017",
  "updatedAt": "1/8/2017"
}, {
  "title": "furniture",
  "createdAt": "3/28/2017",
  "updatedAt": "4/24/2017"
}, {
  "title": "appliances",
  "createdAt": "1/24/2017",
  "updatedAt": "2/12/2017"
}, {
  "title": "vehicles",
  "createdAt": "1/4/2017",
  "updatedAt": "7/9/2017"
}] , {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('categories',null )
  }
};