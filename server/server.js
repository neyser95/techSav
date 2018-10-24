const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/techSevApp');
mongoose.connection.once('open', () => {
  console.log('Connected to mongodb');
});

app.use(express.static(path.join(__dirname, './../build')));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/app/signup', (req, res) => {
  console.log('This route is working');
  console.log(req.body);
  res.json({resp: 'This is a response'});
});

app.listen(8080, () => {
  console.log('Now listening on Port: 8080');
});