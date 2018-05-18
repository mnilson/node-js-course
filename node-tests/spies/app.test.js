const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('Should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Andrew');
    expect(spy).toHaveBeenCalledWith('Andrew');
  });

  it('should call saveUser with user object', () => {
    var email = 'sample@test.com';
    var password = '123abc';

    app.handleSignup(email, password);
  });

});
