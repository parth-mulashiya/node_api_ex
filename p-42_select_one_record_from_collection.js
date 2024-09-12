const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

async function findOne() {
    try{
        const db = client.db("MyDatabase");
        let collection = db.collection("users");
        let query = {name : 'Sarvodaya College'};
        let res = await collection.findOne(query);
        console.log(res);
    }
    catch(err){
        console.error(err);
    }
    finally{
        await client.close();
    }
}

findOne();