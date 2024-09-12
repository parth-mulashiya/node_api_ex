
const MongoClient = require ('mongodb').MongoClient;

const uri = "mongodb://localhost:27017/";

async function deleteDoc(){
    const client = await MongoClient.connect(uri);
    try{
        const dbo = client.db("MyDatabase");
        const myQuery = {name: /^/};
        const res = await dbo.collection("users").deleteMany(myQuery);
        console.log(`Successfully deleted many document.`);
    }finally{
        await client.close();
    }
}
deleteDoc();