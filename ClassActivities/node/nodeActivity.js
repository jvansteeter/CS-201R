var http = require('http');
var fs = require('fs');
var url = require('url');
var ROOT_DIR = "html";
http.createServer(function(request,response)
{
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("Hello World\n");
}).listen(8765);

console.log("Running server");