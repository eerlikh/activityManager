var express     =     require('express'),
    bodyParser  =     require('body-parser'),
    mongoose    =     require('mongoose');


mongoose.connect('mongodb://localhost/activity-manager');

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

//start the app
app.listen('8080', function(){
  console.log('...listening to you');
});
