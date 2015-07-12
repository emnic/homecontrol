var mongoose = require('mongoose');

var TimersSchema = new mongoose.Schema({
  name: String,
  schedule: [{on_time: String, off_time: String}],
});

TimersSchema.methods.updateOnTime = function(updateTime, cb) { 

  this.schedule[0].on_time = updateTime.on_time;
  this.save(cb);
};

module.exports = mongoose.model('timers', TimersSchema);
