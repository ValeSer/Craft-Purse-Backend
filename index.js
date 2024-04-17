const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello world, this is Craft-Purse-Backend')
});

app.listen(8080, () => {
  console.log(`Server is running at http://localhost:${port}`);
})
