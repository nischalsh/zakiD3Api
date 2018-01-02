var express = require('express'),
favicon = require('serve-favicon'),
bodyParser = require('body-parser'),
path = require('path');



var app = express();
var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});

// ADD THESE TWO LINES
// var UserController = require('./user/UserController');
// app.use('/users', UserController);
var graph1Router = require('./routes/graph1Router');
app.use('/graph1Router', graph1Router);


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
