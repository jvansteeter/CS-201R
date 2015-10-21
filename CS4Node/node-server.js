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
    //console.log("Validate User");
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
      res.writeHead(200);
      var result;
      for(var i = 0; i < users.length; i++)
      {
        if(users[i]['user'] === username)
        {
          result = users[i];
          break;
        }
      }
      res.end(JSON.stringify(result));
    });
  }
  else if(urlObj.pathname === '/getTodoList')
  {
    //console.log("getting todo list");

    username = urlObj.query["u"];
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
    //console.log("setting todo list");

    username = urlObj.query["u"];
    var inData = "";
    req.on('data', function(chunk)
    {
      inData += chunk;
    });
    req.on('end', function()
    {
      var todoList = JSON.parse(inData);
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
    //console.log("creating User");

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
      var users = JSON.parse(data);
      var found = false;
      for(var i = 0; i < users.length; i++)
      {
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
          var initTodo = '[{"todoText":"Create ToDo Account","done":true},' +
          '{"todoText":"Try adding/removing items, logging out, and logging back in","done":false}]';
          fs.writeFile("user_data/" + username + ".txt", initTodo, function(err)
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
    //console.log("creating test User");
    var user = [];
    user.push({user:"Joshua", password:"this"});
    user.push({user:"Bob", password:"that"});
    var data = JSON.stringify(user);
    fs.writeFile("users.txt", data, function(err)
    {
      if (err) throw err;
    });
    res.writeHead(200);
    res.end("Test User Created");
  }
  else 
  {
    fs.readFile(ROOT_DIR + urlObj.pathname, function (err, data) 
    {
      //console.log("Login Page");
      if (err) 
      {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  }
}).listen(port);

console.log("Running server on port: " + port);