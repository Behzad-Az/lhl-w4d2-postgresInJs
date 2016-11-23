// Update with your config settings.
const settings = require('./settings');

const config = {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
};

module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: 'development',
      password: 'development',
      host: 'localhost',
      port: 5432,
      database: 'local_famous_people'
    }
  },

  staging: {
    client: 'postgresql',
    connection: config,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: config,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
