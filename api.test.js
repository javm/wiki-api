var superagent = require('superagent');
var expect = require('expect.js');

describe('wiki-api', function(){
  it('gets the index', function(done){
    superagent.get('http://localhost:3000/')
      .send()
      .end(function (err, res){
	if(err)
	  console.log(err);
	expect(res.body).to.be.an('object');
	done();
      });
  });
});
