'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('conditions', [
    {
      condition: 'New (Cherry)',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      condition: 'Like New',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      condition: 'Used',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      condition: 'Stay broke',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
},

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('conditions', null, {});
  }
};