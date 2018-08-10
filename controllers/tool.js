'use strict'

//Imports
var Tool = require('../models/tool');

var controller = {

  getTools: function(req, res){
		Tool.find({}).sort('-modificationDate').exec((err, tools) => {
			if(err) return res.status(500).send({message: 'Error in getTools: ' + err});
			if(!tools) return res.status(404).send({message: 'There are no tools'});
			return res.status(200).send({tools});
		});
	},
  saveTool: function(req, res){
    //New tool
		var tool = new Tool();
    //Set tool data from request
		var params = req.body;
		tool.name = params.name;
    tool.description = params.description;
    //tool.creationDate = new Date().toString();
    //tool.modificationDate = new Date().toString();
    //Save tool
		tool.save((err, toolStored) => {
			if(err) return res.status(500).send({message: 'Error in saveTool: ' + err});
			if(!toolStored) return res.status(404).send({message: 'Tool not saved'});
			return res.status(200).send({tool: toolStored});
		});
	},
  updateTool: function(req, res){
		var idTool = req.params.id;
		var update = req.body;
    //Update tool
    update.modificationDate = new Date();
		Tool.findByIdAndUpdate(idTool, update, {new:true}, (err, updatedTool) => {
			if(err) return res.status(500).send({message: 'Error updating tool'});
			if(!updatedTool) return res.status(404).send({message: 'There is no tool to update'});
			return res.status(200).send({
				tool: updatedTool
			});
		});

	},
	removeTool: function(req, res){
		var idTool = req.params.id;
    //Remove tool
		Tool.findByIdAndRemove(idTool, (err, removedTool) => {
			if(err) return res.status(500).send({message: 'Error removing tool'});
			if(!removedTool) return res.status(404).send({message: "It is not possible to remove the tool"});
			return res.status(200).send({
				tool: removedTool
			});
		});
	},
  getTool: function(req, res){
    var idTool = req.params.id;
    if(idTool == null) return res.status(404).send({message: 'There is no tool with id: ' + idTool});
    //Get tool
    Tool.findById(idTool, (error, tool) => {
      if(error) return res.status(500).send({message: 'Error in getTool: ' + error});
		  if(!tool) return res.status(404).send({message: 'There is no tool with id: ' + idTool});
		  return res.status(200).send({tool});
    });
  }
};

module.exports = controller;
