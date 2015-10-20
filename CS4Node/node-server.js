var fs = require('fs');
var http = require('http');
var url = require('url');
var ROOT_DIR = "html";
var port = 4000;

http.createServer(function (req, res) 
{
  var urlObj = url.parse(req.url, true, false);
  if (urlObj.pathname === '/validateUser') 
  {
    console.log("Validate User");
    fs.readFile('users.txt', function(err,data)
    {
      if (err)
      {
          response.writeHead(404);
          response.end(JSON.stringify(err));
          return;
      }
      var users = JSON.stringify(data);
      username = urlObj.query["u"];
      console.log(username);
      console.log(data["user"]);
      res.writeHead(200);
      var result;
      for(var i = 0; i < data.length; i++)
      {
        if(data[i]['user'] === username)
        {
          console.log(data[i]);
          result = data[i];
          break;
        }
      }
      res.end(JSON.stringify(result);
    });
  }
  else if(urlObj.pathname === '/createTestUser')
  {
    console.log("creating test User");
    var user = [];
    user.push({user:"Joshua", password:"this"});
    user.push({user:"Bob", password:"that"});
    var data = JSON.stringify(user);
    fs.writeFile("users.txt", data, function(err)
    {
      if (err) throw err;
      console.log("test user created");
    });
  }
  else 
  {
    fs.readFile(ROOT_DIR + urlObj.pathname, function (err, data) 
    {
      console.log("Login Page");
      if (err) 
      {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      //console.log("fetching other data");
      res.writeHead(200);
      res.end(data);
    });
  }
}).listen(port);

console.log("Running server on port: " + port);