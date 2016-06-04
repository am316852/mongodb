var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User=require('../model/user_model.js')
router.get('/', function (req, res) {
      User.find(function(err,data){
    res.json(data.length);
     })
});
module.exports = router;
