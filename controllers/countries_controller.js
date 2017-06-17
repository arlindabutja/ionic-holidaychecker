'use strict';

var mongoose = require('mongoose'),
  Holiday = mongoose.model('HolidaySchema');


exports.listAllHolidays = function(req, res) {
  Holiday.find({}, function(err, list) {
    if (err)
      res.send(err);
    res.json(list);
  });
};

/*exports.listAllHolidays = function(req, res) {
    db.collection('test', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
            console.log(items);
        });
    });
};*/


exports.create = function(req, res) {
  var newHoliday = new Holiday(req.body);
  newHoliday.save(function(err, holiday) {
    if (err)
      res.send(err);
    res.json(holiday);
  });
};


exports.read = function(req, res) {
  Holiday.findById(req.params.id, function(err, holiday) {
    if (err)
      res.send(err);
    res.json(holiday);
  });
};


exports.update = function(req, res) {
  Holiday.findOneAndUpdate(req.params.id, req.body, {new: true}, function(err, holiday) {
    if (err)
      res.send(err);
    res.json(holiday);
  });
};


exports.delete = function(req, res) {

  Holiday.remove({
    _id: req.params.id
  }, function(err, holiday) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};