'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('role', [
    {
      role: 'Admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      role: 'User',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
},

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('role', null, {});
  }
};