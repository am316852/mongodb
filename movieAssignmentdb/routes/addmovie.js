var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var multiparty=require('multiparty');
var fs=require('fs');
var User=require('../model/user_model.js')

/* add movie details. */
router.post('/',function(req, res) {
          var form=new multiparty.Form();
        form.parse(req,function(err,fields,files){
          if(files!=undefined){}
          fs.readFile(files.Poster[0].path,function(err,data){
            var newPath="./public/img/"+fields.Title[0]+".jpg";
            fs.writeFile(newPath,data,function(err){
                       })
          })
var Data=new User({
  "Title":fields.Title[0],
"Poster":"/img/"+fields.Title[0]+".jpg",
"Year":fields.Year[0],
  "Actors":fields.Actors[0],
  "Director":fields.Director[0],
  "Plot":fields.Plot[0],
"Released":fields.Released[0],
"imdbRating":fields.imdbRating[0],
  "Awards":fields.Awards[0]
});
Data.save(function(error, dat){
    if(error){
    }
    else{
        }
    res.redirect( "/" );
});
        })
});
module.exports = router;
