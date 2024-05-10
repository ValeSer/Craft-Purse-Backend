require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.DB_URL;

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