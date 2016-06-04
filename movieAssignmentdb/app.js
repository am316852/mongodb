var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/test')
var db=mongoose.connection;
db.on("error",console.error.bind(console,"connection error"));


var routes = require('./routes/index');
var updatemovie=require('./routes/updatemv');
var deletemovie=require('./routes/deletemv');
var addmovie=require('./routes/addmovie');
var max=require('./routes/maxRecords');
var json=require('./routes/fetchJson');
var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/delete', deletemovie);
app.use('/add',addmovie);
app.use('/update',updatemovie);
app.use('/page',json);
app.use('/page1',max);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
