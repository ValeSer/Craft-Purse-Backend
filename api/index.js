require('dotenv').config();
const client = require("./mongoconfig");
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const Inventory = require('./models/inventory');

app.use(cors());

app.get('/', async(req, res) => {
  try {
    console.log('riga13')
    // const db = await client.db("Craft-Purse-Db");
    // const materials = await db.collection("Materials-test").find({}).toArray()
    const inventory = await Inventory.find({})
    console.log('riga17')
    //res.send(materials[0].name);
    res.status(200).json(inventory)
  } catch(e){
    console.log(e)
    res.send(e)
  } 
});
client().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  })
})


module.exports = app
