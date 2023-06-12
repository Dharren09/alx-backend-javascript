/**
 * install Express
 * create a small http server using the Express module
 * shd be assigned to the variable app must be export
 */


const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port);
module.exports = app;
