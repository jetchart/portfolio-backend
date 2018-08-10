'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  title: String,
  description: String,
  creationDate: {type:Date, default:Date.now},
  modificationDate: {type:Date, default:Date.now},
  //tool: {type: Schema.ObjectId, ref: 'tool' }
  //tool: {type: Schema.ObjectId, ref: 'tool' }
  tools: { type: Schema.Types.ObjectId, ref: 'Tool' },
  //tools: {type: Schema.ObjectId, ref: 'tool' }
});

module.exports = mongoose.model('Project', ProjectSchema);
