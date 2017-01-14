//import node modules
var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 2000;
var router = require('./routes/routes.js');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var nodemon = require('nodemon');

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({defaultLayout:'layout', extname: 'hbs'}));
app.set('view engine', 'hbs');

// Middleware
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

app.listen(port, function(){
  console.log('server is running on port ' + port);
});
