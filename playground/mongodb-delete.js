//const MongoClient = require('mongodb').MongoClient;
const{MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err){
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    //deleteMany

    //deleteOne

// db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
//         console.log(result);
//     });

// db.collection('Users').deleteMany({name:'Andrew'}).then((result)=>{
//     console.log(result);
// });

db.collection('Users').findOneAndDelete({_id:new ObjectID("5ad25fd7d99bb5508dbc571d")}).then((result)=>{
    console.log(JSON.stringify(result,undefined,2));
});

   // db.close();
});