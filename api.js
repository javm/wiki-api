var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());
var htmlPath = './files'
var Plane = require('./models/plane');
var plane = new Plane('myPlane');

app.get('/', function(req, res, next){
  res.json({msg: 'Wiki-API'});
});
app.get('/news/:post', function(req, res, next){
  var post = req.params.post;
  var planeCrashPath = htmlPath+'/'+post+'.html'
  //Printing fibonacci for each request
  console.log(plane.fibonacci(34));
  res.sendfile(planeCrashPath);
});

app.post('/news/:post', function(req, res, next){
  
})


app.listen(3000);
