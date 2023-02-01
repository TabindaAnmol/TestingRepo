const { MongoClient } = require("mongodb");
// connection Url
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const connection = async () => {
  await client.connect();
  const db = client.db("myFirstDatabase");
  return db;
};
module.exports=connection
