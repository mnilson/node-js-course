const express = require('express');
const supertest = require('supertest');

var app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

// GET /users
// Give users a name, age
// create 2 -3 users, return as an array.
app.get('/users', (req, res) => {
  res.send([
    {
      name: 'Michael',
      age: '36'
    },{
      name: 'Alison',
      age: '29'
    },{
      name: 'Arya',
      age: '0.5'
    }
  ]);
});

app.listen(3000);
module.exports.app = app;
