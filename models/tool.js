'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ToolSchema = new Schema({
  name: String,
  description: String,
  creationDate: {type:Date, default:Date.now},
  modificationDate: {type:Date, default:Date.now}
});

module.exports = mongoose.model('Tool', ToolSchema);
