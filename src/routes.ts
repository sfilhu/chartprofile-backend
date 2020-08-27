import express from "express";
import UsersController from './controllers/UserController';

const routes = express.Router();
const usersController = new UsersController();

routes.get("/", async (request, response) => {
  return response.json({ status: 200, msg: 'Deu tudo certo no deploy!' })
});

routes.get("/users", usersController.get);
routes.post("/users", usersController.post);
routes.post("/filterRegistred", usersController.filter);
routes.delete("/deleteUser/:id", usersController.delete);

export default routes;