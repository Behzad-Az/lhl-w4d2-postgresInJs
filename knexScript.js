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

const famousPerson = [{
  first_name: 'Michael',
  last_name: 'Jordan',
  birthdate: '1955-10-28'
}];

const addPerson = require('./knexAddPerson')(config, famousPerson, 'famous_people');
const delPerson = require('./knexDelPerson')(config, 'famous_people', 'first_name', 'Ben');