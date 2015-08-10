var mongoose = require('mongoose');


var TimersSchema = new mongoose.Schema({
  name: String,
  schedules: [{ name: String,
                on_time: String,
                on_variation: String,
                off_time: String,
                off_variation: String,
                days: [ {name: String, value: Boolean},
                        {name: String, value: Boolean},
                        {name: String, value: Boolean},
                        {name: String, value: Boolean},
                        {name: String, value: Boolean},
                        {name: String, value: Boolean},
                        {name: String, value: Boolean}]
             }]
});

TimersSchema.methods.updateOnTime = function(updateTime, callback) {

  this.schedules[0].on_time = updateTime.on_time;
  this.save(callback);
};

TimersSchema.methods.addSchedule = function(newSchedule, callback) {
  console.log(newSchedule);
  this.schedules.push(newSchedule.schedule);
  this.save(callback);
};

module.exports = mongoose.model('timers', TimersSchema);
