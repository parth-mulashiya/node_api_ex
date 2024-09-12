const {MongoClient} = require ('mongodb');

async function main(){
    const uri = "mongodb://localhost:27017/";
    const client = new MongoClient(uri);

    try{
        await client.connect();
        await newCollection(client,"MyDatabase")
    }finally{
        await client.close();
    }
}

async function newCollection(client,dbName) {
    const dbobj = await client.db(dbName);
    const collection = await dbobj.createCollection("MyCollecdtion");
    console.log("Collection created");
    console.log(collection);
}

main().catch(console.error)