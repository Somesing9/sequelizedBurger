var express = require('express');
var router = express.Router();

var burgerController = require('../controller/burgerController');

/* GET home page. */
router.get('/', burgerController.burger_list);
router.post('/', burgerController.create);
router.put('/:id', burgerController.update);
module.exports = router;