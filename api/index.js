require('dotenv').config();
const client = require("./mongoconfig");
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

app.get('/', async(req, res) => {
  try {
    const db = await client.db("Craft-Purse-Db");
    const materials = await db.collection("Materials-test").find({}).toArray()
    
    res.send(materials[0].name);
  } catch(e){
    res.send('error')
  } 
});

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:${port}`);
})

module.exports = app
