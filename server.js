var express     =     require('express'),
    bodyParser  =     require('body-parser'),
    mongoose    =     require('mongoose');


mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/mean_blog');

var app = express();

// configs the middlewared
app.use(express.static(__dirname + "/client"));

app.use(bodyParser.json());

//routes
app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html');
});

var ActivitiesController = require('./server/controllers/activity');
app.use('/api/activities', ActivitiesController)


//start the app

var port = process.env.PORT || 8080;
app.listen(port, function(){
 console.log("... listening");
});
