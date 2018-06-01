const {MongoClient} = require('mongodb');

const dbUrl = 'mongodb://localhost:27017/TodoApp'
MongoClient.connect(dbUrl, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.console.log('Unable to fetch Todos', err);
  // });

  db.collection('Todos').find({name: 'Mike'}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.console.log('Unable to fetch Todos', err);
  });

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.console.log('Unable to fetch Todos', err);
  });

  //client.close();
});
