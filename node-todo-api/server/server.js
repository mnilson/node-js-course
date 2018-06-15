var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, resp) => {
    console.log(req.body);
    var todo = new Todo({
      text: req.body.text
    });
    todo.save().then((doc) => {
      resp.send(doc);
    }, (e) =>{
      resp.status(400).send(e);
    });
});

app.get('/todos', (req, resp) => {
  // var result = JSON.stringify(Todo.find());
  Todo.find().then((todos) => {
    resp.send({todos});
  }, (e)=>{
    resp.status(400);
  });
});

app.get('/todos/:id', (req, resp) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    console.log(`invalid id ${id}`);
      resp.status(404).send();
    return;
  }
  Todo.findById(id).then((todo) => {
    if(!todo){
      resp.status(404).send();
      return;
    }
    resp.send({todo});
  }, (e) => {
    resp.status(400).send();
  });
});

app.delete('/todos/:id', (req, resp) => {
  var id = req.params.id;
    if(!ObjectID.isValid(id)){
    console.log(`invalid id ${id}`);
    resp.status(404).send();
    return;
  }
  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo){
      resp.status(404).send();
      return;
    }
    console.log(`deleted todo ${todo}`)
    resp.send({todo});
  }, (e) => {
    resp.status(400).send();
  });
});


app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
