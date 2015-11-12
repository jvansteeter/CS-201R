var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Singer = mongoose.model('Singer');

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Express' });
});

router.get('/singers', function(req, res, next) 
{
  Singer.find(function(err, singers)
  {
    if(err){ return next(err); }
    res.json(singers);
  });
});

router.post('/singers', function(req, res, next) 
{
  var singer = new Singer(req.body);
  singer.save(function(err, singer)
  {
    if(err){ return next(err); }
    res.json(singer);
  });
});

router.param('singer', function(req, res, next, id) 
{
  var query = Singer.findById(id);
  query.exec(function (err, singer)
  {
    if (err) { return next(err); }
    if (!singer) { return next(new Error("can't find singer")); }
    req.singer = singer;
    return next();
  });
});

router.get('/singers/:singer', function(req, res) 
{
  res.json(req.singer);
});

router.put('/singers/:singer/vote', function(req, res, next) 
{
  req.singer.vote(function(err, singer)
  {
    if (err) { return next(err); }
    res.json(singer);
  });
});

module.exports = router;
