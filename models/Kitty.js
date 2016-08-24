var mongoose = require('mongoose')

// schema
var kittySchema = mongoose.Schema({
	name: String,
	deviceList: []
});

// export model
module.exports = mongoose.model('kitty', kittySchema);
