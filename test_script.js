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

const queryDb = require('./db')(config);

app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({
  extended: true
}));

const sql =
  'SELECT first_name, last_name ' +
  'FROM famous_people ' +
  'WHERE LOWER(first_name) = $1;';

queryDb(sql, [arg], function(err, result) {
  if (err) console.error(err);
  console.log(result.rows);
});




// client.connect((err) => {
//   if (err) {
//     return console.error('Connection Error', err);
//   }
//   // client.query('SELECT $1::int AS number', ['1'], (err, result) => {
//   //   if (err) {
//   //     return console.error('error running query', err);
//   //   }
//   //   console.log(result.rows[0].number);
//   //   client.end();
//   // });
//   const sql =
//     'SELECT first_name, last_name ' +
//     'FROM famous_people ' +
//     'WHERE LOWER(first_name) = $1;';

//   client.query(sql,[arg],(err, result) => {
//     if (err) { console.error("WTF"); }
//     console.log(result.rows);
//     client.end();

//   });
// });

