
const MongoClient = require ('mongodb').MongoClient;

const uri = "mongodb://localhost:27017/";

async function updateDoc(){
    const client = await MongoClient.connect(uri);
    try{
        const dbo = client.db("MyDatabase");
        const myQuery = {name: /^/};
        const newValue = {$set : {email: "info@gmail.com"}};
        const res = await dbo.collection("users").updateMany(myQuery,newValue);
        console.log(res.modifiedCount + " Document(s) Updated");
    }finally{
        await client.close();
    }
}
updateDoc();