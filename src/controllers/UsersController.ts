import { Request, Response } from 'express';
import knex from '../database/connection';

class Users {
  async create( request:Request, response: Response ) {
    
    console.log(request.body)
    const { email, birthday }  = await request.body
    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    const currentDay = date.getDate();
    request.body.create_at = `${date.toISOString()}`;
    console.log(request.body.create_at);
    
    if(birthday != '') {
      if(currentMonth > birthday.split('-')[1]) {
        request.body.age = `${(date.getFullYear() - birthday.split('-')[0])}`;
      } else if(currentMonth == birthday.split('-')[1]) {
        if(currentDay >= birthday.split('-')[2]) {
          request.body.age = `${(date.getFullYear() - birthday.split('-')[0])}`;
        } else {
          request.body.age = `${(date.getFullYear() - birthday.split('-')[0]) - 1}`;
        }
      } else {
        request.body.age =`${(date.getFullYear() - birthday.split('-')[0]) - 1}`;
      }
    }

    const trx        = await knex.transaction();
    const emailExist = await trx('users').where('email', email).first();

    if(emailExist && email != '') {
      await trx.rollback();
      return response.status(400).json({status: 400, msg: 'Email já cadastrado!'})
    }

    await trx('users').insert(request.body)
    await trx.commit()
    return response.status(200).json({status: 200, msg: 'Cadastro realizado com sucesso!'})
    return response.status(200).json({data: request.body})
  }

  async list(request: Request, response: Response) {
    const allUsers = await knex.select('users.*');
    return response.json(allUsers);
  }
}

export default Users;