const {ObjectID} =require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const  {Todo}    = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5ad4a2d07dab80100a025116';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id:id
// }).then((todos)=>{
//     console.log('Todos',todos);
// });
 
// Todo.findOne({
//     _id:id
// }).then((todo)=>{
//     console.log('Todo',todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id',todo);
// }).catch((e)=>console.log(e));


var id2 = '5ad35cb4ea9d5e1424b1d585';

// if(!ObjectID.isValid(id2)){
//     console.log('ID not valid');
// }

// User.findOne({
//    _id:id2
// }).then((user)=>{
//     console.log('User',user);
// });

User.findById(id2).then((user)=>{
if(!user){
    return console.log('User not found');
}
console.log(JSON.stringify(user,undefined,2));
}).catch((e)=>console.log(e));