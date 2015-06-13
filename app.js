var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var data=require('./lib/data')

app.use(bodyParser.json());
app.use('/public', express.static(__dirname + '/public'));


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
});


app.post('/rest/overview', function (req, res) {
  res.send(data.getOverview())
});

app.post('/rest/object', function (req, res) {
  var id=req.body.id.length||0;
  res.send(data.getObject(id))
});

app.post('/rest/story', function (req, res) {
  var id=req.body.id.length||0;
  res.send(data.getStory(id))
});


app.post('/rest/dump', function (req, res) {
  res.send("file received")
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});