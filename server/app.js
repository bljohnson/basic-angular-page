var express = require('express');
var app = express();
var path = require('path');

// spin up server
app.listen(3000, 'localhost', function (req, res) {
  console.log('Now serving 3000');
});

// make public folder static
app.use(express.static('public'));

// base URL
app.get('/', function (req, res) {
  console.log('in base URL');
  res.sendFile(path.resolve('./public/views/index.html')); // gets this path and sends to base URL as response
});
