// Takes in a config object to configure the knex database connection.
// Takes in a a key and a search name.
// Deletes the corresponding objects found.

function delPerson (config, table, key, name) {

  const knex = require('knex')({
    client: 'pg',
    connection: config
  });

  knex(table).where(key, name)
    .del().asCallback(function (err, rows) {
      if (err) console.log(err);
        knex.select().from('famous_people')
        .asCallback(function (err, rows) {
          if (err) console.error(err);
          console.log(rows);
      });
  });
}

module.exports = delPerson;