var should = require("chai").should(),
expect = require("chai").expect,
assert = require("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");
var url = supertest("http://localhost:8080");

describe("Testing the first route", function(err){
  it("should handle the request", function(done){
    url.get("/")
          .expect('Content-Type', /html/)
          .expect(200)
          .end(function(err,res){
          if (err) {
                        throw err;
                }
          done();
        });
  });
});
describe("Testing the add movie route get", function(err){
  it("should handle the request", function(done){
      url.get("/page1")

          .expect(200)
          .end(function(err,res){
          if (err) {
                        throw err;
                }
res.text.should.be.equal("7");

          done();
        });
  });
});

describe("Testing the add movie route post", function(err){
  it("should handle the request", function(done){
      url.post("/add")
          .type('form')
          .field('Content-Type','multipart/form-data')
          .field('Title' , 'India 20')
          .attach('Poster' , process.env.PWD+'/test/image/devdas.jpg')
          .expect(302)
          .end(function(err,res){
          if (err) {
                        throw err;
                }
//res.text.should.be.equal("7");

          done();
        });
  });
});

/*describe("Testing the first route", function(err){
  it("should handle the request", function(done){
    url.get('/add')
        .expect(302)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          if (err) {
                console.log("--------err--------"+err);
                throw err;

			    }
           //expect(res.text).to.be.equal("express");

          // assert(res.text == "express","Test has failed");
          done();
        });
  });
});*/
