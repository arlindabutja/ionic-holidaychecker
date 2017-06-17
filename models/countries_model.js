'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var HolidaySchema = new Schema({
    country: String,
    date: Date /*{
            day: Date.day,
            month: Date.month,
            year: Date.year,
            dayOfWeek: Date.dayOfWeek
    }*/,
    localName: {
        type: String,
        Required: 'Kindly enter the local name of the task'
    },
    englishName: {
        type: String,
        Required: 'Kindly enter the english name of the task'
    },
    description: String
});

module.exports = mongoose.model('HolidaySchema', HolidaySchema);