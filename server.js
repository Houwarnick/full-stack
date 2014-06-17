var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var myData = require('./server-assets/myData.js')
var cors = require('cors');
app.use(cors());
app.use(bodyParser());

app.get('/', function(req,res){
	res.send('hello world');
});

/*get requests
===========================================================*/
app.get('/friends', function(req, res){
	var myFriends = myData.getFriends();
	res.send(myFriends);
});

app.get('/family', function(req, res){
	var myFamily = myData.getFamily();
	res.send(myFamily);
});

app.get('/hobbies', function(req, res){
	var myHobbies = myData.getHobbies();
	res.send(myHobbies);
});

app.get('/me', function(req, res){
	var me = myData.getMe();
	res.send(me);
});

/*post requests
============================================================*/
app.post('/friends', function(req, res){
	myData.addFriends(req.body);
	res.send(myData.getFriends());
});

app.post('/family', function(req, res){
	myData.addFamily(req.body);
	res.send(myData.getFamily());
});

app.post('/hobbies', function(req, res){
	console.log(req.body);
	myData.addHobby(req.body.hobby);
	res.send(myData.getHobbies());
});

app.post('/me', function(req, res){
	myData.addMe(req.body.favShow);
	res.send(myData.getMe());
});
 var server = app.listen(8989, function(){
 	console.log('Listening on port %d', server.address().port);

 });

