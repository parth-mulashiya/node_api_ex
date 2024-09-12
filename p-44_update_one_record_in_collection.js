
const MongoClient = require ('mongodb').MongoClient;

const uri = "mongodb://localhost:27017/";

async function updateDoc(){
    const client = await MongoClient.connect(uri);
    try{
        const dbo = client.db("MyDatabase");
        const myQuery = {name: "Sarvodaya College"};
        const newValue = {$set : {name: "Rajkot Collage"}};
        const res = await dbo.collection("users").updateOne(myQuery,newValue);
        console.log("1 Document Updated");
    }finally{
        await client.close();
    }
}
updateDoc();