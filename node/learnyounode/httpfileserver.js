var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var fileName = process.argv[3];
http.createServer(function (req, res) 
{
	var src = fs.createReadStream(fileName);
	src.pipe(res);
}).listen(port);
