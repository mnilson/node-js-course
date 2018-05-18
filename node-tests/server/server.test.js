const supertest = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

// server
//  GET /
//  GET /users

describe('Server', () =>{

  describe('GET /', ()=>{
    it('Should return hello world', (done) => {
      supertest(app)
        .get('/')
        .expect('hello world')
        .expect(200)
        .end(done);
    });
  });

  describe('GET /users',()=>{
    it('Should include me', (done) => {
      supertest(app)
        .get('/users')
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Michael', age: '36'
          });
        }).end(done);
    });
  });

});
