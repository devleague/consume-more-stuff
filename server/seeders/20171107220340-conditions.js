'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('conditions',[{
  "title": "good",
  "createdAt": "8/17/2017",
  "updatedAt": "9/1/2017"
}, {
  "title": "used",
  "createdAt": "3/2/2017",
  "updatedAt": "8/29/2017"
}, {
  "title": "new",
  "createdAt": "8/21/2017",
  "updatedAt": "8/24/2017"
}, {
  "title": "okay",
  "createdAt": "9/23/2017",
  "updatedAt": "8/8/2017"
}, {
  "title": "new",
  "createdAt": "1/19/2017",
  "updatedAt": "9/2/2017"
}, {
  "title": "used",
  "createdAt": "4/12/2017",
  "updatedAt": "12/12/2016"
}, {
  "title": "used",
  "createdAt": "5/30/2017",
  "updatedAt": "1/31/2017"
}, {
  "title": "used",
  "createdAt": "10/2/2017",
  "updatedAt": "8/16/2017"
}, {
  "title": "new",
  "createdAt": "8/3/2017",
  "updatedAt": "2/6/2017"
}, {
  "title": "okay",
  "createdAt": "12/8/2016",
  "updatedAt": "7/15/2017"
}] , {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('conditions',null )
  }
};