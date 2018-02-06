var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');    
var hbs = require('hbs');


var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

//helpers hbs
hbs.registerHelper('date',function(){
    return new Date();
});





// mongoose connect
mongoose.connect('mongodb://localhost/library');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function(){
    console.log('Procedimento OK, mongodb foi conectado!');
});
var company = mongoose.Schema({
    name:String
});
var Company = mongoose.model('Company',company);
Company.create({
    name: 'Company 1'
},function(err,company){
    if(err){
        console.log('error');
        return
    }
    
    console.log('Created -> ',company);
});
/* End configs mongoose */






// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
