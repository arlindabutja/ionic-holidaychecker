'use strict';

module.exports = function(app) {
  var holidayList = require('../controllers/countries_controller');
  var express = require('express');
  var router = express.Router();

  // todoList Routes
  router.route('api/holidays')
    .get(holidayList.listAllHolidays)
    .post(holidayList.create);


  router.route('api/holidays/:country')
    .get(holidayList.read)
    .put(holidayList.update)
    .delete(holidayList.delete);

  //app.route.get('/api/holidayslist/:country/:dateFrom/:dateTo', endpoints.findByGivenParams);

};