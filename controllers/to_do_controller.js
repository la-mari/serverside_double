var Todo = require('../models/todo.js');
var toDos = {};

 toDos.index = function(req, res){
 	Todo.find({}, function(err, toDos){
 		if (err){
 			console.log(err);
 		}
 		res.json(toDos);
 	});

 };

 toDos.create = function(req, res){
  var todo = new Todo();
  todo.title = req.body.title;

  todo.save(function(err){
    if (err) {
      console.log(err);
    }
    res.json({success: true, message: "todo created"});
  });
};


// toDos.update = function(req, res){

// };

// toDos.destroy = function(req, res){

// };

  // title: String,
  // priority: Number,
  // difficulty: Number,
  // isComplete: Boolean,
  // createdAt: Date,
  // updatedAt: Date,
  // completedOn: Date

module.exports = toDos;
