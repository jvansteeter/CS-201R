var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
var url = require('url');
var app = express();
var options = {
    host: '127.0.0.1',
    key: fs.readFileSync('ssl/server.key'),
    cert: fs.readFileSync('ssl/server.crt')
};
  http.createServer(app).listen(80);
  https.createServer(options, app).listen(443);
  app.get('/', function (req, res) {
    res.send("Get Index");
  });
  app.use('/', express.static('./html', {maxAge: 60*60*1000}));
  app.get('/getcity', function (req, res) {
    console.log("In getcity route");
    res.json([{city:"Price"},{city:"Provo"}]);
  });