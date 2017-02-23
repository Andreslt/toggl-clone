var express = require('express');
var passport = require('passport');

// Connecting db && routes
require('./db/config')();
var routes = require('./config/routes');

// Initializing app
var app = express();

// Setting up Passport
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Setting up Middlewares
require('./config/middlewares')(app);
app.use('/', routes);

var port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log('Maggic happens on port ' + port);
});