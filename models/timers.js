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

TimersSchema.methods.updateOnTime = function(updateTime, cb) { 

  this.schedules[0].on_time = updateTime.on_time;
  this.save(cb);
};

module.exports = mongoose.model('timers', TimersSchema);
