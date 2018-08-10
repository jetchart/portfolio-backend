'use strict'

// Imports
var express = require('express');
var controller = require('../controllers/project.js');

//Define routes
var router = express.Router();
router.get('/projects', controller.getProjects);
router.get('/project/:id', controller.getProject);
router.post('/project/save', controller.saveProject);
router.put('/project/update/:id', controller.updateProject);
router.delete('/project/remove/:id', controller.removeProject);

//Export routes
module.exports = router;
