'use strict'

//Imports
var express = require('express');
var controller = require('../controllers/index.js');


//Define routes
var router = express.Router();
router.get('/index', controller.getIndex);
router.get('/index/:greeting', controller.getGreeting);

//Export routes
module.exports = router;
