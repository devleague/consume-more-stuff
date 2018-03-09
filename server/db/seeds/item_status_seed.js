
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('item_status').del()
    .then(function () {
      // Inserts seed entries
      return knex('item_status').insert([
        {id: 1, status: 'published'},
        {id: 2, status: 'pending'},
        {id: 3, status: 'sold'}
      ]);
    });
};
