const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello world, this is Craft-Purse-Backend updated')
});

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:${port}`);
})

module.exports = app
