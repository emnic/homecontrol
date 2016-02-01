var mongoose = require('mongoose');


var DeviceSchema = new mongoose.Schema({
  hw_data: {id: String,
            name: String,
            controller: String,
            protocol: String,
            model: String,
            house: String,
            unit: String
           },
  state: Boolean,
  timers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Timer' }]
});

DeviceSchema.methods.changeState = function(newState, callback) {
  this.state = newState.state;
  this.save(callback);
};

module.exports = mongoose.model('devices', DeviceSchema);