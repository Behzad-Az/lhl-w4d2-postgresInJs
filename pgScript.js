const arg = (process.argv[2]).toLowerCase();

const settings = require('./settings');
const queryDb = require('./pgGetDb')(config);
const sql =
  'SELECT first_name, last_name ' +
  'FROM famous_people ' +
  'WHERE LOWER(first_name) = $1;';

const config = {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
};

queryDb(sql, [arg], function(err, result) {
  if (err) console.error(err);
  console.log(result.rows);
});
