import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('users').insert({
    "name": "Juca",
    "create_at": "",
    "cel": "(88) 88888-8888",
    "birthday": "",
    "age": "17",
    "email": "sergio@hot.com",
    "neighborhood": "iputinga",
    "genero": "masculino",
    "toknow": "indicação",
    "which": "@bellafitancia",
    "activity": "sim",
    "registered": 1,
    "whichActivity": "crossfit"
  })
}