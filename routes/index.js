var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.route('/')
	.get(index)
	.create(index)

router.route('/:id')


module.exports = router;
