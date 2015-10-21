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
          res.writeHead(404);
          res.end(JSON.stringify(err));
          return;
      }
      var users = JSON.parse(data);
      username = urlObj.query["u"];
      console.log(username);
      res.writeHead(200);
      var result;
      for(var i = 0; i < users.length; i++)
      {
        if(users[i]['user'] === username)
        {
          console.log("result: " + users[i]);
          result = users[i];
          break;
        }
      }
      res.end(JSON.stringify(result));
    });
  }
  else if(urlObj.pathname === '/getTodoList')
  {
    console.log("getting todo list");

    username = urlObj.query["u"];
    console.log("username=" + username);
    fs.readFile("user_data/" + username + ".txt", function(err,data)
    {
      if(err)
      {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      var todoList = JSON.parse(data);
      res.writeHead(200);
      res.end(JSON.stringify(todoList));
    });
  }
  else if(urlObj.pathname === '/setTodoList')
  {
    console.log("setting todo list");

    username = urlObj.query["u"];
    console.log("username= " + username);
    var inData = "";
    req.on('data', function(chunk)
    {
      console.log("chunk");
      inData += chunk;
    });
    req.on('end', function()
    {
      var todoList = JSON.parse(inData);
      console.log(todoList);
      fs.writeFile("user_data/" + username + ".txt", JSON.stringify(todoList), function(err)
      {
        if(err) throw err;
        res.writeHead(200);
        res.end("OK");
      });
    });
  }
  else if(urlObj.pathname === '/createUser')
  {
    console.log("creating User");

    fs.readFile('users.txt', function(err,data)
    {
      if(err)
      {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      username = urlObj.query["u"];
      secret = urlObj.query["p"];
      console.log("user:" + username + " pass:" + secret);
      var users = JSON.parse(data);
      var found = false;
      for(var i = 0; i < users.length; i++)
      {
        console.log(users[i]['user']);
        if(username === users[i]['user'])
          found = true;
      }
      if(!found)
      {
        users.push({user:username, password:secret});
        var data = JSON.stringify(users);
        fs.writeFile("users.txt", data, function(err)
        {
          if (err) throw err;
          console.log("user created");
          fs.writeFile("user_data/" + username + ".txt", "", function(err)
          {
            if(err) throw err;
          });
        });
        res.writeHead(200);
        res.end("OK");
      }
      else
      {
        res.writeHead(200);
        res.end("Username already Exists");
      }
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
    res.writeHead(200);
    res.end("Test User Created");
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