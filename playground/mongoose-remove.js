const {ObjectID} =require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const  {Todo}    = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findByIdAndRemove('5ad7d1dd03826f661e7d6664').then((todo)=>{
console.log(todo);
});