var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var express = require('express');
var User = require('../db/schemas').user;
var path = require('path');

module.exports = (app)=>{
    app.use(express.static(process.cwd()+'/app/client/public'));
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({'extended':'true'}));
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
    app.use(methodOverride());
    app.use(session({
        secret: 'togglClone',
        saveUninitialized: true,
        cookie:{maxAge: 60*60*1000},
        ephemeral: true,
        resave: true
    }));
    app.use(sessionMidleware);
}

var sessionMidleware = (req, res, next) => {
  if (req.session && req.session.passport) {
    User.findOne({ _id: req.session.passport.user }, function(err, user) {
      if (user) {
        req.user = user;
        req.session.user = user;  //refresh the session value
        res.locals.user = user;
      }
      next();
    });
  } else {
    next();
  }
}