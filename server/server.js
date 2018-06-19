const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then(doc => {
    res.send(doc);
  }, err => res.status(400).send(err));
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = { app };

// let todo = new Todo({
//   text: 'something    d'
// });
//
// todo
//   .save()
//   .then((doc) => {
//     console.log('Saved todo', doc);
//   }, (err) => {
//     console.log('Unable to save todo', err);
//   });
//
// let user = new User({
//   email: 'arsenbabajanyan95@gmail.com'
// });
//
// user
//   .save()
//   .then((doc) => {
//     console.log('User saved', doc);
//   }, (err) => {
//     console.log('Unable to save user', err);
//   });
