'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('status', [
    {
      sold: 'No',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      sold: 'Yes',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
},

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('status', null, {});
  }
};