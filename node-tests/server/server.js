const express = require('express');
const supertest = require('supertest');

var app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/users', (req, res) => {
  res.send([
    {
      name: 'Alpha',
      age: '36'
    },{
      name: 'Omega',
      age: '29'
    },{
      name: 'Beta',
      age: '0.5'
    }
  ]);
});

app.listen(3000);
module.exports.app = app;
