var express = require('express');
var bodyParser = require('body-parser');

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
  var result = JSON.stringify(Todo.find());
  resp.send(result);
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
