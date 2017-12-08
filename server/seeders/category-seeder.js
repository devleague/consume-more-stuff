'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
    {
      category: 'Vehicles',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      category: 'Appliances',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      category: 'Computers',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      category: 'Furniture',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
