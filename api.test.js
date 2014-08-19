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

  it('gets the plane crash news', function(done){
    superagent.get('http://localhost:3000/news/Latest_plane_crash')
      .send()
      .end(function (err, res){
	if(err)
	  console.log(err);
	console.log(res);
	expect(res.text).to.be.a('string');
	done();
      });
  });

});
