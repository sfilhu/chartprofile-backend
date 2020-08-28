import knex from 'knex';
import knexfile from '../../knexfile';

const knex_db = process.env.DB == 'local'
                ? 'development'
                : 'production';

export default knex(knexfile[knex_db]);