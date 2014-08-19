var express = require('express');
var js = require('fs');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());

app.get('/', function(req, res, next){
  res.json({msg: 'Wiki-API'});
});

app.listen(3000);
