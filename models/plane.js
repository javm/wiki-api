var util = require('util');
var events = require('events');

var Plane = function(name){
  this.name = name;
};

//Become eventEmitter
util.inherits(Plane, events.EventEmitter);

var plane = Plane.prototype;

plane.fibonacci = function(n){
  if(n === 0)
    return 0;
  else if(n === 1)
    return 1;
  else
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
};


module.exports = Plane;
