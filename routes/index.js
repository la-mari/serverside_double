var todosController = require('../controllers/to_do_controller.js');
var express = require('express');
var router = express.Router();

router.route('/')
	.get(todosController.index)
	.post(todosController.create);

router.route('/:id')
  .patch(todosController.update)
//   .delete(todosController.destroy);


module.exports = router;
