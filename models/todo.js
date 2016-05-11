var mongoose = require('mongoose');

//create user schema
var todoSchema = mongoose.Schema({
	title: String,
	priority: Number,
	difficulty: Number,
	isComplete: Boolean,
	createdAt: Date,
	updatedAt: Date,
	completedOn: Date
});

var Todo = mongoose.model('Todo', todoSchema);

//exports module
module.exports = Todo;