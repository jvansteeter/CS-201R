var mongoose = require('mongoose');
var SingerSchema = new mongoose.Schema({
  title: String,
  votes: {type: Number, default: 0},
});
CommentSchema.methods.vote = function(cb) {
  this.votes += 1;
  this.save(cb);
};
mongoose.model('Singer', CommentSchema);