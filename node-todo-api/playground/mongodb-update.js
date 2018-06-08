const {MongoClient, ObjectID} = require('mongodb');

const dbUrl = 'mongodb://localhost:27017/TodoApp'
MongoClient.connect(dbUrl, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // findOneAndUpdate
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b1af84815421bba593eaaa6')
  }, {
    $inc: {
      age: 1
    },
    $set: {
      name: 'Michael'
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
    db.close();
  });
});
