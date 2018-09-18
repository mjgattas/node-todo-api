const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.deleteMany({}).then((result) => {
//   console.log(result);
// });
//
// Todo.findOneAndDelete()

Todo.findByIdAndRemove('5ba0586d9822dc88a2dc7ef0').then((todo) => {
  console.log(todo);
});

Todo.findOneAndDelete()
