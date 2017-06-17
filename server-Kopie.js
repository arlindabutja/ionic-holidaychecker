var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Holiday = require('./models/countries_model'),
  bodyParser = require('body-parser'),
  mongodb = require("mongodb"),
  ObjectID = mongodb.ObjectID,
  routes = require('./routes/countries_routes');

  mongoose.Promise = global.Promise;

var MONGODB_URI = 'mongodb://butjaa:admin@ds123182.mlab.com:23182/holidaychecker-db';
    
mongoose.connect(MONGODB_URI)
    .then(() =>  console.log('connection succesful'))
    .catch((err) => console.error(err));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/', routes);

app.listen(port);

module.exports = app;

console.log('todo list RESTful API server started on: ' + port);

