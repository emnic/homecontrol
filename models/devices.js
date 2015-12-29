var mongoose = require('mongoose');


var DeviceSchema = new mongoose.Schema({
  name: String,
  state: Boolean,
  timers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Timer' }]
});

DeviceSchema.methods.changeState = function(newState, callback) {
  this.state = newState.state;
  this.save(callback);
};

module.exports = mongoose.model('devices', DeviceSchema);