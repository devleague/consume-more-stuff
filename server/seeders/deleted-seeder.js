'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('deleted', [
    {
      deleted: 'No',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      deleted: 'Yes',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
},

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('deleted', null, {});
  }
};