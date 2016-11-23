// Takes in a config object to configure the knex database connection.
// takes in a famous person object and adds to the given table in the db.

function addPerson (config, famousPersonObj, table) {

  const knex = require('knex')({
    client: 'pg',
    connection: config
  });

  knex(table).insert(famousPersonObj)
    .asCallback(function(err, result) {
    if (err) console.log(err);
    knex.select().from(table)
    .asCallback(function (err, rows) {
      if (err) console.error(err);
      console.log(rows);
    });
  });

}

module.exports = addPerson;