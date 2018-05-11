const utils = require('./utils');

it('should add two numbers', () => {
  var actual = utils.add(1,2);
  if(actual !== 3){
    throw new Error(`Expected 3, but got ${actual}.`);
  }
});

it('should square a number', () => {
  var actual = utils.square(2);
  if(actual !== 4){
    throw new Error(`Expected 4, but got ${actual}.`);
  }
});
