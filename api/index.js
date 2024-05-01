require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require("mongodb");

app.use(cors());

app.get('/', async(req, res) => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const db = await client.db("Craft-Purse-Db");
    const materials = await db.collection("Materials-test").find({}).toArray()
    
    res.send(materials[0].name);
  } catch(e){
    res.send(e)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:${port}`);
})

// Replace the placeholder with your Atlas connection string
const uri = process.env.DB_URL;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  }
);

async function run() {
  
}
run().catch(console.dir);
module.exports = app
