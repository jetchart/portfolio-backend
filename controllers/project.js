'use strict'

//Imports
var Project = require('../models/project');

var controller = {

  getProjects: function(req, res){
		Project.find({}).populate('tools').sort('-modificationDate').exec((err, projects) => {
			if(err) return res.status(500).send({message: 'Error in getProjects: ' + err});
			if(!projects) return res.status(404).send({message: 'There are no projects'});
			return res.status(200).send({projects});
		});
	},
  saveProject: function(req, res){
    //New project
		var project = new Project();
    //ObjectID
    var ObjectID = require('mongodb').ObjectID;
    //Set project data from request
		var params = req.body;
		project.title = params.title;
    project.description = params.description;
    //project.creationDate = new Date().toString();
    //project.modificationDate = new Date().toString();
    //project.tool = new ObjectID(params.tool);
    project.tools = params.tools;
    //Save project
		project.save((err, projectStored) => {
			if(err) return res.status(500).send({message: 'Error in saveProject: ' + err});
			if(!projectStored) return res.status(404).send({message: 'Project not saved'});
			return res.status(200).send({project: projectStored});
		});
	},
  updateProject: function(req, res){
		var idProject = req.params.id;
		var update = req.body;
    //Update project
    update.modificationDate = new Date();
		Project.findByIdAndUpdate(idProject, update, {new:true}, (err, updatedProject) => {
			if(err) return res.status(500).send({message: 'Error updating project'});
			if(!updatedProject) return res.status(404).send({message: 'There is no project to update'});
			return res.status(200).send({
				project: updatedProject
			});
		});

	},
	removeProject: function(req, res){
		var idProject = req.params.id;
    //Remove project
		Project.findByIdAndRemove(idProject, (err, removedProject) => {
			if(err) return res.status(500).send({message: 'Error removing project'});
			if(!removedProject) return res.status(404).send({message: "It is not possible to remove the project"});
			return res.status(200).send({
				project: removedProject
			});
		});
	},
  getProject: function(req, res){
    var idProject = req.params.id;
    if(idProject == null) return res.status(404).send({message: 'There is no project with id: ' + idProject});
    //Get project
    Project.findById(idProject, (error, project) => {
      if(error) return res.status(500).send({message: 'Error in getProject: ' + error});
		  if(!project) return res.status(404).send({message: 'There is no project with id: ' + idProject});
		  return res.status(200).send({project});
    });
  }
};

module.exports = controller;
