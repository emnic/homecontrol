var mongoose = require('mongoose');

var HomecontrolSchema = new mongoose.Schema({
  name: String,
  devices: {},
  timers: [{'timer_name': [{'schedule_name': String, 'on_time': Date, 'off_time': Date}]}],
  

  timers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Timer' }],
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('homecontrol', HomecontrolSchema);

var DeviceSchema = new mongoose.Schema({
  name: String,
  schedule: [{'on_time': Date, 'off_time': Date}],
});

var TimerSchema = new mongoose.Schema({
  name: String,
  schedule: [{'on_time': Date, 'off_time': Date}],
});

