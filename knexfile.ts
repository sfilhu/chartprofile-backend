import path from 'path';

export default {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true
  },
  production: {
    client: 'pg',
    connection: {
      host : process.env.DATABASE_URL,
      database: 'fusion_db',
      user: 'postgres',
      password: 'asdwq10tt'
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }
  }
};

// postgres://pdxiacoaotpcyp:7c1afd517c29402179072b65dac07b0e890da65c34c7d98a0192dae6550a2d0f@ec2-54-86-57-171.compute-1.amazonaws.com:5432/dcqot9jjgs73eh
