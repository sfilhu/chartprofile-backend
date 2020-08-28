import Knex from 'knex'

export async function up(knex:Knex) {
  return knex.schema.createTable('users', user => {
    user.increments('id').primary();
    user.string('name', 50).notNullable();
    user.string('create_at', 50).notNullable();
    user.string('cel', 50).notNullable();
    user.string('birthday', 50).notNullable();
    user.string('age', 3).notNullable();
    user.string('email', 50).notNullable();
    user.string('neighborhood', 50).notNullable();
    user.string('genero', 50).notNullable();
    user.string('toknow', 50).notNullable();
    user.string('registered', 50).notNullable();
    user.string('which', 50).notNullable();
    user.string('activity', 50).notNullable();
    user.string('whichActivity', 50).notNullable();
  })
}

export async function down(knex:Knex) {
  return knex.schema.dropTable('users');
}