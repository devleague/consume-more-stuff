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
}, {
  "title": "published",
  "createdAt": "3/12/2017",
  "updatedAt": "4/14/2017"
}, {
  "title": "published",
  "createdAt": "10/11/2017",
  "updatedAt": "2/4/2017"
}, {
  "title": "published",
  "createdAt": "3/24/2017",
  "updatedAt": "8/16/2017"
}, {
  "title": "sold",
  "createdAt": "3/4/2017",
  "updatedAt": "3/2/2017"
}, {
  "title": "published",
  "createdAt": "11/21/2016",
  "updatedAt": "2/15/2017"
}, {
  "title": "sold",
  "createdAt": "2/19/2017",
  "updatedAt": "3/11/2017"
}, {
  "title": "published",
  "createdAt": "9/20/2017",
  "updatedAt": "11/20/2016"
}, {
  "title": "published",
  "createdAt": "2/11/2017",
  "updatedAt": "8/19/2017"
}] , {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('itemstatuses',null )
  }
};