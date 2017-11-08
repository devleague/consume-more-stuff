'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
    {
      username: 'Justin',
      password: 'password',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: 'Nathan',
      password: 'password',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: 'Kristin',
      password: 'password',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: 'Ricky',
      password: 'password',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
},

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('users', null, {});
  }
};
    