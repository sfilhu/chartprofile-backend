import express from "express";
import UsersController from './controllers/UsersController'
import knex from './database/connection';

const routes = express.Router();
const user = new UsersController()

routes.get("/", async (request, response) => {
  return response.json({ status: 200, msg: 'Deu tudo certo no deploy!' })
});

routes.get('/users', user.list)
routes.post('/create', user.create)
// routes.post('/create', (request, response) => {
//   ( async () => {
//     // await knex('users').insert(request.body);

//     // return response.status(200).json({
//     //   msg: 'Cadastrado realizado com sucesso!',
//     // })
//    })().catch( err => {
//     setImmediate(() => {
//       response.status(500);
//       console.log(err);
//       return response.send('Error: ' + err.message);
//     })
//    })
// })

export default routes;