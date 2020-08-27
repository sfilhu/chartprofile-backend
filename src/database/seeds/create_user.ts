import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('users').insert({
    "checkIn": "2020-08-21T19:00:00Z",
    "name": "Teste filter 10",
    "cel": "(88) 88888-8888",
    "birthday": "",
    "age": "34",
    "email": "",
    "neighborhood": "iputinga",
    "genero": "masculino",
    "toknow": "indicação",
    "which": "@bellafitancia",
    "activity": "sim",
    "registered": 1,
    "whichActivity": "crossfit"
  })
}