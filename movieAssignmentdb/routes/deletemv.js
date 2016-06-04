var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User=require('../model/user_model.js')
/* delete movie. */
router.post('/',function(request, respond) {
  var newContent=[];
var str = ((request.body.Title).toString());
       User.find({'Title':str}).remove().exec(function(err,data){
        })
        respond.redirect("/");
});
module.exports = router;
