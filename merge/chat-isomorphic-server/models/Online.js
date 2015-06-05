var mongoose = require('mongoose');

var OnlineSchema = new mongoose.Schema({
	user: String,
	delete
});

module.exports = mongoose.model('Todo', TodoSchema);