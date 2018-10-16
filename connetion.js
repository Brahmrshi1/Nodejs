
const MongoClient = require('mongodb').MongoClient;
const dbURI =
  "mongodb:brahmrshi@jbspl.com:9409081244b#@mycluster0-shard-00-00.mongodb.net:27017,mycluster0-shard-00-01.mongodb.net:27017,mycluster0-shard-00-02.mongodb.net:27017/admin?ssl=true&replicaSet=Mycluster0-shard-0&authSource=admin";
    
  MongoClient.connect(dbURI, function(err, client) {
    if(err) {
         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
    }
    
    console.log('Connected...');
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
 });


// require any models

require("../model/task");