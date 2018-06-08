var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var newUser = new User({
  email: 'fooa@bar.com'
});
newUser.save().then((user) =>{
  console.log('Saved user', user);
}, (e) =>{
  console.log('unable to save user', e);
});

// var newTodo = new Todo({
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) =>{
//   console.log('Unable to save todo');
// });
