var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');

//Database
var user = require('../db/schemas').user;
var task = require('../db/schemas').task;
var project = require('../db/schemas').project;

//dashboard & Login >>
    router.get('/', isLoggedIn, (req, res) => {
        res.redirect('/dashboard');
    });

    router.get('/dashboard', isLoggedIn, (req, res) => {
        console.log('dashboard reached!');
        res.sendfile('app/client/public/index.html');
    });

    router.get('/login', (req, res) => {
        console.log('Get LOG IN');
        res.send('NOT LOGGED YET');
    });

    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });
//<<

//Users >>
    router.post('/user/new', (req, res) => {

    });
    router.delete('/user/:id', (req, res) => {

    });
//<<

//Tasks >>
    router.get('/task', (req, res) => {

    });

    router.post('/task/new', (req, res) => {

    });

    router.delete('/task/:id', (req, res) => {

    });

    router.put('/task/:id', (req, res) => {

    });
//<<

//Projects >>
    router.get('/project', (req, res) => {

    });
    router.post('/project/new', (req, res) => {

    });
    router.delete('/project/:id', (req, res) => {

    });
    router.put('/project/:id', (req, res) => {

    });
//<<

//Twitter >>
    router.get('/auth/twitter', passport.authenticate('twitter'));

    router.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
            successRedirect: '/dashboard',
            failureRedirect: '/login'
        })
    );
//<<

function isLoggedIn(req, res, next) {
    console.log('Log Function');
    if (req.isAuthenticated()){
        console.log('Logged In');
        return next();
    }
    console.log('Not Logged Yet');
    res.redirect('/login');
}

module.exports = router;