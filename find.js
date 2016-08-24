var mongoose = require('mongoose');

// setup mongo db connect to "test" database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test');

// Models
var Kitty = require('./models/Kitty');

// connect to database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('connected!');

	// find from database
	Kitty.find(function(err, kitties) {
		if (err) {
			return console.error(err);
		}
		console.log(kitties);
	});
});
