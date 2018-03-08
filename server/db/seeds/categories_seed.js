
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, category: 'vehicles'},
        {id: 2, category: 'appliances'},
        {id: 3, category: 'computers'},
        {id: 4, category: 'furniture'},
      ]);
    });
};
