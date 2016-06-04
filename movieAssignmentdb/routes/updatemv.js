var express = require('express');
//var mongoose = require('mongoose');
var router = express.Router();
var bodyParser = require('body-parser');
var multiparty=require('multiparty');
var jsonfile = require('jsonfile');
var fs=require('fs');
var User=require('../model/user_model.js')
/* update movie details. */
router.post('/',function(request, respond) {
        var form=new multiparty.Form();
       form.parse(request,function(err,fields,files){
                 if (files.Poster[0].size > 0) {
               var data=fs.readFileSync(files.Poster[0].path);
                   var path = "./public/img/"+fields.Title[0]+".jpg";;
                   fs.writeFileSync(path, data);
                 }
         User.findOne({Title: fields.Title[0]}, function (err, user) {
             user.Title=fields.Title[0];
          user.Poster="/img/"+fields.Title[0]+".jpg";
           user.Year=fields.Year[0];
             user.Actors=fields.Actors[0];
            user.Director=fields.Director[0];
            user.Plot=fields.Plot[0];
          user.Released=fields.Released[0];
           user.imdbRating=fields.imdbRating[0];
             user.Awards=fields.Awards[0];
             user.save(function (err) {
                 if(err) {
                     console.error('ERROR!');
                 }
             });
              respond.redirect("/");
         });
 });
});
module.exports = router;
