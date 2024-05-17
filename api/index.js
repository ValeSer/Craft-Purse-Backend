const express = require('express');
const app = express();
const cors = require('cors');

const Material = require('./models/material')
const MaterialController = require('./controllers/material')

app.use(cors());
app.use(express.json());

require('dotenv').config();
const client = require("./mongoconfig");

const port = 3000;

app.get('/', async(req, res) => {
  try {
    const materials = await Material.find({})
    res.status(200).json(materials)
  } catch(e){
    console.log(e)
    res.send(e)
  } 
});

app.post('/material', MaterialController.CreateMaterial)


client().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  })
})


module.exports = app
