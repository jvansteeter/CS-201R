/*var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
mongoose.connect('mongodb://localhost/comments');
require('./../models/Comments');
var Comment = mongoose.model('Comment');*/

/*
 * GET home page.
 */

/*exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};*/

var express = require('express');
var router = express.Router();

router.get('/comments', function(req, res, next) {
  Comment.find(function(err, comments){
    if(err){ return next(err); }
    res.json(comments);
  });
});

router.post('/comments', function(req, res, next) {
  var comment = new Comment(req.body);
  comment.save(function(err, comment){
    if(err){ return next(err); }
    res.json(comment);
  });
});

module.exports = router;