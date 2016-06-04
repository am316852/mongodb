var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User=require('../model/user_model.js')
router.get('/', function (req, res) {
    console.log("inside get request");
    var count=req.param("count");
      User.find(function(err,data){
         res.json(data[count]);
       })
});
module.exports = router;
