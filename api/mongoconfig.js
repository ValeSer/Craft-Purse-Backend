require('dotenv').config();
const mongoose = require('mongoose');
//const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.DB_URL || "mongodb://0.0.0.0/craftPurse";

// const client = new MongoClient(uri,  {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// client.connect();

// module.exports = client

const client = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    return db;
 } catch (error) {
  console.log('Unable to onnect to MongoDB', error);
  throw error;
 }
};

module.exports = client;