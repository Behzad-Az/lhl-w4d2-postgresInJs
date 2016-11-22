const pg = require('pg');

function getDb(config) {
  return function queryDb(sql, params, callback) {
    const client = new pg.Client(config);
    client.connect(function (err) {
      if (err) return callback(err);
      client.query(sql, params, function (err, result) {
        if (err) return callback(err);
        callback(null, result);
        client.end(function (err) {
          if (err) throw err;
        });
      });
    });
  }
}

module.exports = getDb;