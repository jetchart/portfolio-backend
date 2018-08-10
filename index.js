'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var config = require('./config');

mongoose.Promise = global.Promise;
mongoose
  .connect(config.db.url, { useNewUrlParser: true })
  .then(() => {
    console.log("Satisfactory conection to database: " + config.db.url);
    // Creacion del servidor
    app.listen(config.application.port, () => {
      console.log("Server running at port: " + config.application.port);
    });
  })
  .catch(err => console.log(err));
