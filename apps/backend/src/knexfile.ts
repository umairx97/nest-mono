import('ts-node/register');
import { Knex } from 'knex';

const config: Knex.Config = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'postgres',
    database: 'nest_mono',
  },
  migrations: {
    directory: './migrations',
  },
};

export default config;