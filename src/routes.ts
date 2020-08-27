import express from "express";
// import usersController from './controllers/UserController'
const routes = express.Router();

routes.get("/users", async (request, response) => {
  return response.json({ status: 200, msg: 'Deu tudo certo no deploy!' })
});
// routes.post("/users", usersController.post);
// routes.post("/filterRegistred", usersController.filter);
// routes.delete("/deleteUser/:id", usersController.delete);

export default routes;