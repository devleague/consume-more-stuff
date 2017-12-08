'use strict';

 var Sequelize = require('sequelize');
 var env       = process.env.NODE_ENV || 'development';
 var config    = require('../config/config.json')[env];
 var sequelize = new Sequelize(config.database, config.username, config.password, config);
 const faker = require('faker');
 const db = require('../models');
 const Condition = db.Condition;

module.exports = {
  up: (queryInterface, Sequelize) => {
        const items = generateFakeItems(35);
        return queryInterface.bulkInsert('items', items, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('items', null, {});
  }
};

function generateFakeItems(count) {
  const items = [];
  for (let i = 0; i < count; i++) {
    const newItem = {
      name: faker.commerce.product(),
      description: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
      imageUrl: faker.image.image(),
      manufacturer: faker.commerce.department(),
      model: faker.commerce.productName(),
      price: faker.commerce.price(),
      dimensions: faker.lorem.word(),
      notes: faker.lorem.words(),
      createdAt: faker.date.recent(90),
      updatedAt: new Date(),
      condition_id: Math.floor(Math.random() * 4) + 1,
      category_id: Math.floor(Math.random() * 4) + 1,
      is_sold: 1,
      user_id: Math.floor(Math.random() * 25) + 1
    };

    items.push(newItem);
  }
  return items;
}

