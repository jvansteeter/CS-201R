var http = require('http');
var fs = require('fs');
var url = require('url');
var ROOT_DIR = "html";
http.createServer(function(request,response)
{
    var urlObj = url.parse(request.url, true, false);
    console.log("openning " + ROOT_DIR + urlObj.pathname);
    fs.readFile(ROOT_DIR + urlObj.pathname, function (err,data)
    {
        if (err)
        {
            response.writeHead(404);
            response.end(JSON.stringify(err));
            return;
        }
        response.writeHead(200);
        response.end(data);
    })
    //response.writeHead(200, {'Content-Type': 'text/plain'});
    //response.end("Hello World\n");
}).listen(8080);

console.log("Running server");