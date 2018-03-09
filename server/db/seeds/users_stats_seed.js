
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_status').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_status').insert([
        {id: 1, status: 'active'},
        {id: 2, status: 'inactive'},
      ]);
    });
};
