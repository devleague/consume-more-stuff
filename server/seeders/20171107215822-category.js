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
  "title": "computers",
  "createdAt": "4/28/2017",
  "updatedAt": "6/17/2017"
}, {
  "title": "appliances",
  "createdAt": "1/4/2017",
  "updatedAt": "7/9/2017"
}, {
  "title": "appliances",
  "createdAt": "2/14/2017",
  "updatedAt": "2/4/2017"
}, {
  "title": "appliances",
  "createdAt": "10/12/2017",
  "updatedAt": "8/9/2017"
}, {
  "title": "appliances",
  "createdAt": "4/5/2017",
  "updatedAt": "9/4/2017"
}, {
  "title": "furniture",
  "createdAt": "4/22/2017",
  "updatedAt": "12/3/2016"
}, {
  "title": "appliances",
  "createdAt": "12/3/2016",
  "updatedAt": "2/9/2017"
}] , {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('categories',null )
  }
};