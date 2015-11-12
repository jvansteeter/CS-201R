var mongoose = require('mongoose');
var SingerSchema = new mongoose.Schema({
  _id: String,
  votes: {type: Number, default: 0},
});
SingerSchema.methods.vote = function(cb) {
  this.votes += 1;
  this.save(cb);
};
mongoose.model('Singer', SingerSchema);