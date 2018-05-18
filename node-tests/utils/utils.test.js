const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
  var actual = utils.add(1,2);
  expect(actual).toBe(3).toBeA('number');
});

it('should square a number', () => {
  var actual = utils.square(2);
  expect(actual).toBe(4).toBeA('number');
});

it('should verify first and last names are set', ()=>{
  var user = {
    age: '36',
    location: 'Saskatoon'
  };

  var actual = utils.setName(user, 'Michael Nilson');

  expect(actual.firstName).toEqual('Michael').toBeA('string');
  expect(actual.lastName).toEqual('Nilson').toBeA('string');
  expect(actual).toBeA('object');
});
