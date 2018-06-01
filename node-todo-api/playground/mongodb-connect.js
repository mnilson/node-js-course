const {MongoClient, ObjectID} = require('mongodb');

const dbUrl = 'mongodb://localhost:27017/TodoApp'
MongoClient.connect(dbUrl, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    text: 'Eat Lunch',
    completed: false
  }, (err, result) => {
    if (err){
      return console.log('Failed to insert Todo', err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  });

  db.collection('Todos').find().toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.console.log('Unable to fetch Todos', err);
  });

  client.close();
});
