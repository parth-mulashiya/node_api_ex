const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/";
const client = new MongoClient.connect(uri);

async function findAll() {
    try{
        const db = client.db("MyDatabase");
        let collection = db.collection("users");
        let res = await collection.find({}).toArray();
        console.log(res);
    }
    catch(err){
        console.error(err);
    }
    finally{
        await client.close();
    }
}

findAll();