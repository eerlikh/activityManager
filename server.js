var express     =     require('express'),
    bodyParser  =     require('body-parser'),
    mongoose    =     require('mongoose');


mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/mean_blog');

var Activity = require('./server/models/activity');

var app = express();

// configs the middlewared
app.use(express.static(__dirname + "/client"));

app.use(bodyParser.json());

//routes
app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html');
});

app.get('/api/activities', function(req, res){
  Activity.find({}, function(err, activities){
    res.json(activities);
  });
});

app.post('/api/activities', function(req, res){
  var activity = new Activity(req.body);
  activity.save(function(err, activity){
    res.json(activity);
  });
});

app.delete('/api/activities/:id', function(req, res){
  var id = req.params.id;
  Activity.findByIdAndRemove(id, function(err,activity){
    res.json({status: 202, message: 'Success'});
  });
});

//start the app

var port = process.env.PORT || 8080;
app.listen(port, function(){
 console.log("... listening");
});
