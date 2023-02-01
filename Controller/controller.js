const dbConnection = require("../Connection/dbConnection.js");
const insertDb = async (userData) => {
  const db = await dbConnection();
  const collection = db.collection("userCollection");
  await collection.insertOne(userData);
};
const readDb = async () => {
  const db = await dbConnection();
  const collection = db.collection("userCollection");
  return await collection.find().toArray();
};
const readOneDbRecord = async (userEmail) => {
  const db = await dbConnection();
  const collection = db.collection("userCollection");
  return await collection.findOne({email:userEmail});
};
const updateDb = async (uEmail,uUser) => {
  const db = await dbConnection();
  const collection = db.collection("userCollection");
  await collection.updateOne(
    { email: uEmail },
    { $set: uUser }
  );
};
const deleteDb = async (delEmail) => {
  const db = await dbConnection();
  const collection = db.collection("userCollection");
  await collection.deleteOne({ email:delEmail });
};
module.exports = {
  insertDb: insertDb,
  readDb: readDb,
  updateDb: updateDb,
  deleteDb: deleteDb,
  readOneDbRecord:readOneDbRecord
};
