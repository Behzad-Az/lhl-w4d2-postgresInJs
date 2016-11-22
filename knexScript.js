const arg = (process.argv[2]).toLowerCase();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const settings = require('./settings');

const config = {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
};

const knex = require('knex')({
  client: 'pg',
  connection: config
});

knex.select('first_name', 'last_name').from('famous_people')
    .where(knex.raw('LOWER("first_name") = ?', arg))
    .asCallback(function (err, rows) {
      if (err) console.error(err);
      console.log(rows);
    });