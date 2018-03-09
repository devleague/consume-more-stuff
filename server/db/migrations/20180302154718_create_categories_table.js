
exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', function (table) {
    table.increments();
    table.enu('category',['vehicles','appliances','computers','furniture']).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories');
};