import express from "express";
const routes = express.Router();

routes.get("/", async (request, response) => {
  return response.json({ status: 200, msg: 'Deu tudo certo no deploy!' })
});

export default routes;