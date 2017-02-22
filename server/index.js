var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Connecting db && routes
var routes = require('./routes');
mongoose.connect('mongodb://localhost:27017/ideaware');

// Initializing app
var app = express();

// Configuring middlewares
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());
app.use('/api', routes);

var port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log('Maggic happens on port ' + port);
});