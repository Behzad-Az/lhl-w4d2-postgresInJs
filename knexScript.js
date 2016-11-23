const settings = require('./settings');

const config = {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
};

const famousPerson = [{
  first_name: 'Michael',
  last_name: 'Jordan',
  birthdate: '1955-10-28'
}];

// Adds in current entry. Prints out the the list.
const addPerson = require('./knexAddPerson')(config, famousPerson, 'famous_people');

// deletes given entry if found. Prints out the list.
const delPerson = require('./knexDelPerson')(config, 'famous_people', 'first_name', 'Michael');