const supertest = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

it('Should return hello world', (done) => {
  supertest(app)
    .get('/')
    .expect('hello world')
    .expect(200)
    .end(done);
});

// Add a new test to assert:
// 200 HTTP
// Assert that you exist in users array.
it('Should include me', (done) => {
  supertest(app)
    .get('/users')
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'Michael', age: '36'
      });
    }).end(done);
});
