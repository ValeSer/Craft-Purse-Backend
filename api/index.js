require('dotenv').config();
const client = require("./mongoconfig");
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const Material = require('./models/material');

app.use(cors());

app.get('/', async(req, res) => {
  try {
    const materials = await Material.find({})
    res.status(200).json(materials)
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
