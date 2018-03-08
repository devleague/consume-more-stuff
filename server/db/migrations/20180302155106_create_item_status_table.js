exports.up = function(knex, Promise) {
  return knex.schema.createTable('item_status', function (table) {
    table.increments();
    table.enu('status',['published','pending','sold']).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('item_status');
};