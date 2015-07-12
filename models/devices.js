var mongoose = require('mongoose');

var DeviceSchema = new mongoose.Schema({
  name: String,
  timers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Timer' }]
});

module.exports = mongoose.model('devices', DeviceSchema);