const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Simple Node.js Web App</h1>');
});

app.listen(port, () => {
  console.log(`App running at http://0.0.0.0:${port}`);
});



























