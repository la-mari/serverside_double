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
  todo.priority = req.body.priority;
  todo.difficulty = req.body.difficulty;
  todo.isComplete = req.body.isComplete;
  todo.updatedAt = req.body.updatedAt;
  todo.completedOn = req.body.completedOn

  todo.save(function(err){
    if (err) {
      console.log(err);
    }
    res.json({success: true, message: "todo created"});
  });
};


toDos.update = function(req, res){
  Todo.findById(req.params.id, function(err, todo) {
    console.log('hi');
    todo.update({
      title: req.body.title
    }, function(err, todo){
      if (err) {
        console.log(err);
      }
    });
      res.json({success: true, message: "user updated"});
    });
};

 toDos.destroy = function(req, res){
  Todo.findById(req.params.id, function(err, todo){
    if(err){
      console.log(err);
    } else {
      todo.remove(function(err, todo){
        if(err){
          console.log(err);
        }
      });
    }
    res.json({success: true, message: "todo destroyed"});
  });
 };


module.exports = toDos;
