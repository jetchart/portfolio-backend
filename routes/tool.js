'use strict'

// Imports
var express = require('express');
var controller = require('../controllers/tool.js');

//Define routes
var router = express.Router();
router.get('/tools', controller.getTools);
router.get('/tool/:id', controller.getTool);
router.post('/tool/save', controller.saveTool);
router.put('/tool/update/:id', controller.updateTool);
router.delete('/tool/remove/:id', controller.removeTool);

//Export routes
module.exports = router;
