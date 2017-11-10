'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
    {
      category: 'Books',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      category: 'Electronics',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      category: 'Furniture',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      category: 'Toys',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      category: 'Clothing',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
