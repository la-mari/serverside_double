var Todo = require('../models/todo.js');
var toDos = {};

 toDos.index = function(req, res){
 	Todo.find({}, function(err, toDos){
 		if (err){
 			throw err
 		};
 		res.json(toDos);
 	})

 };

// toDos.create = function(req, res){

// };

// toDos.update = function(req, res){

// };

// toDos.destroy = function(req, res){

// };



module.exports = toDos;
