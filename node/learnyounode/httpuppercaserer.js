var http = require('http');
var fs = require('fs');
var map = require('through2-map');

var port = process.argv[2];
http.createServer(function (req, res) 
{
    req.pipe(map(function (chunk) 
    {
      return chunk.toString().toUpperCase();
    })).pipe(res);
}).listen(port);
