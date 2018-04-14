//const MongoClient = require('mongodb').MongoClient;
const{MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err){
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
//   db.collection('Todos').findOneAndUpdate({
//       _id: new ObjectID('5ad25e5bd99bb5508dbc564e')
//   },{
//       $set:{
//           completed:true
//       }
//   },{
//       returnOriginal:false
//   }).then((result)=>{
//       console.log(result);
//   })

    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID('5ad25fe7d99bb5508dbc5729')
    },{
        $set:{
            name:'Enis'
        },
        $inc:{
            age:1
        }
    },{
        retrunOriginal:false
    }).then((result)=>{
        console.log(result);
    })
   
 
   // db.close();
});