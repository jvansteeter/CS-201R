var http = require('http');
var fs = require('fs');
var url = require('url');
var ROOT_DIR = "html";
http.createServer(function(request,response)
{
    var urlObj = url.parse(req.url, true, false);
    console.log("openning " +ROOT_DIR + urlObj.pathname);
    fs.readFile(ROOT_DIR + urlObj.pathname, function (err,datat)
    {
        if (err)
        {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.sriteHead(200);
        res.end(data);
    })
    //response.writeHead(200, {'Content-Type': 'text/plain'});
    //response.end("Hello World\n");
}).listen(8080);

console.log("Running server");