const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const databse = client.db("MyDatabase");
        const users = databse.collection("users");

        const doc = [
            {
                name: "Pujara Telecom",
                email: "pujara@gmail.com"
            },
            {
                name: "Galexy Cinema",
                email: "galexy@gmail.com"
            },
            {
                name: "Cosmoplex",
                email: "cosmoplex@gmail.com"
            }
        ];
        const options = {ordred: true};
        const result = await users.insertMany(doc,options);
        console.log("Data Inserted");
    } finally {
        await client.close();
    }
}
run();