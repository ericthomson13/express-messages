const express = require('express');
const app = express();
const Message = require('./db/Message');
const bp = require('body-parser')

app.use((req,res,next) => {
  res.status(404).send('That route does not exist');
});

const port = 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
