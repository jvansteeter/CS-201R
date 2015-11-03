var fs = require('fs');
var http = require('http');
var url = require('url');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ROOT_DIR = "html";
var port = 4000;

var validateUser = function(username, password, callback)
{
  MongoClient.connect("mongodb://localhost/blog_database", function(err, db) 
  {
    if(err) throw err;
    db.collection("user", function(err, user)
    {
      if(err) throw err;
      user.find({"_id" : username }, function(err, items)
      {
        items.toArray(function(err, itemArr)
        {
          var response = "";
          //console.log(itemArr);
          //res.writeHead(200);
          if(itemArr.length === 0)
            response = "Invalid Username";
          else if (password === itemArr[0]['password'])
            response = "true";
          else
            response = "false";
          callback(response);
          //res.end(response);
        });
      });
    });
  });
};

http.createServer(function (req, res) 
{
  var urlObj = url.parse(req.url, true, false);

  if (urlObj.pathname === '/validateUser') 
  {
    // console.log("/validateUser");
    //console.log("Validate User");
    username = urlObj.query["u"];
    password = urlObj.query["p"];

    validateUser(username, password, function(success)
    {
      // console.log("success= " + success);
      if(success === "true")
      {
        res.writeHead(200);
        res.end(success);
      }
      else if(success === "false")
      {
        res.writeHead(200);
        res.end(success);
      }
      else if(success === "Invalid Username")
      {
        res.writeHead(200);
        res.end(success);
      }
      else
      {
        res.writeHead(500);
        res.end(success);
      }
    });
  }
  else if(urlObj.pathname === '/createUser')
  {
    // console.log("creating User");
    username = urlObj.query["u"];
    password = urlObj.query["p"];

    MongoClient.connect("mongodb://localhost/blog_database", function(err, db) 
    {
      if(err) throw err;
      assert.equal(null, err);
      db.collection("user", function(err, user)
      {
        if(err) throw err;
        user.insert({ "_id" : username, "password" : password, entry : [] }, function(err, result)
        {
          assert.equal(err, null);
          // console.log(result);
        });
      });
    });
    res.writeHead(200);
    res.end("OK");
  }
  else if(urlObj.pathname === '/createNewPost')
  {
    // console.log("creating new post");
    username = urlObj.query["u"];
    password = urlObj.query["p"];

    validateUser(username, password, function(success)
    {
      // console.log("!!!success val= " + success);
      if(success === "true")
      {
        var inData = "";
        req.on('data', function(chunk)
        {
          inData += chunk;
        });
        req.on('end', function()
        {
          var newPost = JSON.parse(inData);
          MongoClient.connect("mongodb://localhost/blog_database", function(err, db) 
          {
            // console.log("createNewUser connecting to database");
            if(err) throw err;
            assert.equal(null, err);
            db.collection("user", function(err, user)
            {
              if(err) throw err;
              user.update(
                { "_id" : username, "password" : password },
                { $push: {"entry": newPost}}, function(err, result)
                {
                  if(err) throw err;
                  // console.log(result);
                  res.writeHead(200);
                  res.end("OK");
                });
            });
          });
        });
      }
      else if(success === "false")
      {
        res.writeHead(200);
        res.end(success);
      }
      else if(success === "Invalid Username")
      {
        res.writeHead(200);
        res.end(success);
      }
      else
      {
        res.writeHead(500);
        res.end(success);
      }
    });
  }
  else if(urlObj.pathname === '/getMyPosts')
  {
    // console.log("getting my posts");
    username = urlObj.query["u"];
    password = urlObj.query["p"];
  
    validateUser(username, password, function(success)
    {
      // console.log("success= " + success);
      if(success === "true")
      {
        //-------------------------------------------------------------
        MongoClient.connect("mongodb://localhost/blog_database", function(err, db) 
        {
          if(err) throw err;
          db.collection("user", function(err, user)
          {
            if(err) throw err;
            user.find({"_id" : username }, function(err, items)
            {
              items.toArray(function(err, itemArr)
              {
                // console.log(itemArr);
                res.writeHead(200);
                res.end(JSON.stringify(itemArr));
              });
            });
          });
        });
      }
      else if(success === "false")
      {
        res.writeHead(200);
        res.end(success);
      }
      else if(success === "Invalid Username")
      {
        res.writeHead(200);
        res.end(success);
      }
      else
      {
        res.writeHead(500);
        res.end(success);
      }
    });
  }
  else if(urlObj.pathname === '/getAllPosts')
  {
    // console.log("getting my posts");
    username = urlObj.query["u"];
    password = urlObj.query["p"];
  
    validateUser(username, password, function(success)
    {
      // console.log("success= " + success);
      if(success === "true")
      {
        //-------------------------------------------------------------
        MongoClient.connect("mongodb://localhost/blog_database", function(err, db) 
        {
          if(err) throw err;
          db.collection("user", function(err, user)
          {
            if(err) throw err;
            user.find(function(err, items)
            {
              items.toArray(function(err, itemArr)
              {
                // console.log(itemArr);
                res.writeHead(200);
                res.end(JSON.stringify(itemArr));
              });
            });
          });
        });
      }
      else if(success === "false")
      {
        res.writeHead(200);
        res.end(success);
      }
      else if(success === "Invalid Username")
      {
        res.writeHead(200);
        res.end(success);
      }
      else
      {
        res.writeHead(500);
        res.end(success);
      }
    });
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