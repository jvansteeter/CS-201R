var fs = require('fs');
var http = require('http');
var url = require('url');
var ROOT_DIR = "html";
http.createServer(function (req, res) 
{
  var urlObj = url.parse(req.url, true, false);
  fs.readFile(ROOT_DIR + urlObj.pathname, function (err,data) 
  {
    if (err) 
    {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);

    //console.log("URL path "+urlObj.pathname);
    //console.log("URL search "+urlObj.search);
    console.log("URL query "+urlObj.query["q"]);

    if(urlObj.pathname.indexOf("getcity") !=-1) 
    {
      // Execute the REST service 
      console.log("In REST Service");
      var myRe = new RegExp("^"+urlObj.query["q"]);
      //console.log(myRe);
      fs.readFile('cities.dat.txt', function (err, data) 
      {
        if(err) throw err;
        cities = data.toString().split("\n");
        var jsonresult = [];
        for(var i = 0; i < cities.length; i++) 
        {
          var result = cities[i].search(myRe); 
          if(result != -1) 
          {
            //console.log(cities[i]);
            jsonresult.push({city:cities[i]});
          } 
        }
        //console.log(JSON.stringify(jsonresult));
        //res.writeHead(200);
        res.end(JSON.stringify(jsonresult)); 
        console.log(jsonresult);
      });
    }
    else {
      // Serve static files
      res.end(data);
    }
  });
}).listen(8080);
/*
var options = 
{
    hostname: 'localhost',
    port: '8080',
    path: '/hello.html'
  };
function handleResponse(response) {
  var serverData = '';
  response.on('data', function (chunk) {
    serverData += chunk;
  });
  response.on('end', function () {
    console.log(serverData);
  });
}
http.request(options, function(response){
  handleResponse(response);
}).end();*/