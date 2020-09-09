import express from "express";
import UsersController from './controllers/UsersController'
import knex from './database/connection';

const routes = express.Router();
const user = new UsersController()

routes.get("/", async (request, response) => {
  return response.json({ status: 200, msg: 'Deu tudo certo no deploy!' })
});

routes.get('/users', user.list);
routes.post('/create', user.create);
routes.post('/filterRegister', user.filter);
routes.delete('/delete/:id', user.delete);

export default routes;