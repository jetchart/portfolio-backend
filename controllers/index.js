'use strict'

var controller = {
  getIndex : function(req, res){
    return res.status(200).send({message:'Soy el index'});
  },
  getGreeting : function(req, res){
    return res.status(200).send({message:'Hello ' + req.body.greeting});
  }
};

module.exports = controller;
