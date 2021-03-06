'use strict';

var express = require('express');
var router = express.Router();
var controller = require('../controllers/customer-controller');

router.post('/', controller.post);

module.exports = router;