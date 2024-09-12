const {MongoClient} = require ('mongodb');

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

async function run(){
    try{
        await client.connect();
        const databse = client.db("MyDatabase");
        const users = databse.collection("users");

        const doc = {
            name: "Sarvodaya College",
            email: "savodayacollege@gmail.com"
        };
        const result = await users.insertOne(doc);
        console.log("Data Inserted");
    }finally{
        await client.close();
    }
}
run();