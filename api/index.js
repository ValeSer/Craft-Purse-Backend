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

app.get('/', MaterialController.GetMaterials);

app.post('/material', MaterialController.CreateMaterial)

app.delete('/material/:materialId', MaterialController.DeleteMaterial)

app.patch('/material', MaterialController.EditMaterial)


client().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  })
})


module.exports = app
