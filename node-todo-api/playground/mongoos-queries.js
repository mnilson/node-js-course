const {ObjectID} = require('mongodb');

const {mongoos} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b1affa414371eac52bc73f0';
var taskId = '5b2438540b630ca8179b7636';
if(!ObjectID.isValid(id)){
  console.log('invalid id');
  return;
}

// Todo.find().then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.find({
//   _id: id
// })
//   .then((todos)=>{
//     console.log('Todos', todos);
//   });
//
// Todo.findOne({_id: id})
//   .then((todo)=>{
//     console.log('Todos', todo);
//   });

  Todo.findById(taskId).then((todo) => {
    if(!todo){
      console.log('id not found');
    }
    console.log("todo", todo)
  }).catch((e) => console.log(e));

User.findById(id).then((user) => {
  if(!user){
    console.log('user not found');
    return;
  }
  console.log("user", user);
}).catch((e) => console.log(e));
