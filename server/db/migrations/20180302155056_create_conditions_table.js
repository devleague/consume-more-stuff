
exports.up = function(knex, Promise) {
  return knex.schema.createTable('conditions', function (table) {
    table.increments();
    table.enu('condition',['used','worn','fair','good','new']).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('conditions');
};
