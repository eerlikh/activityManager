var mongoose = require('mongoose');

var ActivitySchema = new mongoose.Schema({
  name: {type: String},
  activity: {type: String},
  date: {type: Date}
});

var Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;
