var express = require('express');

var ActivitiesController = express.Router();

var Activity = require('../models/activity');

ActivitiesController.get('/', function(req, res){
  Activity.find({}, function(err, activities){
    res.json(activities);
  });
});

ActivitiesController.post('/', function(req, res){
  var activity = new Activity(req.body);
  activity.save(function(err, activity){
    res.json(activity);
  });
});

ActivitiesController.delete('/:id', function(req, res){
  var id = req.params.id;
  Activity.findByIdAndRemove(id, function(err,activity){
    res.json({status: 202, message: 'Success'});
  });
});

module.exports = ActivitiesController;
