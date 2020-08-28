import express from "express";
import UsersController from './controllers/UsersController'

const routes = express.Router();
const user = new UsersController()

routes.get("/", async (request, response) => {
  return response.json({ status: 200, msg: 'Deu tudo certo no deploy!' })
});

routes.get('/users', user.list)
routes.post('/create', user.create)

export default routes;