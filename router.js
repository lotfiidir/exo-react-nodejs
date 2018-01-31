var express = require('express');
var router = express.Router();

var mainController = require('./mainController');

router.get('/api', mainController.api);

module.exports = router;