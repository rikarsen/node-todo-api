const { MongoClient, ObjectID } = require('mongodb');

let obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Todos')
    .deleteOne({
      text: 'something',
    })
    .then((res) => {
      console.log(res);
    });

    client.close();
  });
