const arg = (process.argv[2]).toLowerCase();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const pg = require('pg');
const settings = require('./settings');

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

app.use(bodyParser.urlencoded({
  extended: true
}));

client.connect((err) => {
  if (err) {
    return console.error('Connection Error', err);
  }
  // client.query('SELECT $1::int AS number', ['1'], (err, result) => {
  //   if (err) {
  //     return console.error('error running query', err);
  //   }
  //   console.log(result.rows[0].number);
  //   client.end();
  // });
  const sql =
    'SELECT first_name, last_name ' +
    'FROM famous_people ' +
    'WHERE LOWER(first_name) = $1;';

  client.query(sql,[arg],(err, result) => {
    if (err) { console.error("WTF"); }
    console.log(result.rows);
    client.end();

  });
});