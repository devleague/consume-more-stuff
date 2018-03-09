
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('conditions').del()
    .then(function () {
      // Inserts seed entries
      return knex('conditions').insert([
        {id: 1, condition: 'used'},
        {id: 2, condition: 'worn'},
        {id: 3, condition: 'fair'},
        {id: 4, condition: 'good'},
        {id: 5, condition: 'new'}
      ]);
    });
};
