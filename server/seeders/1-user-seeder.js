'use strict';

 var Sequelize = require('sequelize');
 var env       = process.env.NODE_ENV || 'development';
 var config    = require('../config/config.json')[env];
 var sequelize = new Sequelize(config.database, config.username, config.password, config);
 const faker = require('faker');
 const db = require('../models');
 const Condition = db.Condition;
 // const Category = db.Category;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Condition.findAll({ distinct: 'condition' })
      .then(conditions => {
        const users = generateFakeUsers(25, conditions);
        return queryInterface.bulkInsert('users', users, {});
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

function generateFakeUsers(count, conditions) {
  const users = [];
  for (let i = 0; i < count; i++) {
    const newUser = {
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: 'pass',
      role: 2,
      createdAt: faker.date.recent(90),
      updatedAt: new Date(),
    };

    users.push(newUser);
  }
  return users;
}

