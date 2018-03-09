
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('email').notNullable().unique();
    table.string('username').notNullable().unique();
    table.string('password').notNullable();
    table.integer('user_status_id').notNullable();
    table.foreign('user_status_id').references('id').inTable('user_status');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};