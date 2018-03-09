exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_status', function (table) {
    table.increments();
    table.string('status').notNullable().defaultTo('active');
 
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_status');
};