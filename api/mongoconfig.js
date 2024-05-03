const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.DB_URL;

const client = new MongoClient(uri,  {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

client.connect();

module.exports = client