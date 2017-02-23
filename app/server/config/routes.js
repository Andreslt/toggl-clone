var express = require('express');
var router = express.Router();
var passport = require('passport');

//Database
var Task = require('../db/schemas').task;
var Project = require('../db/schemas').project;

//dashboard & Login >>
    router.get('/', isLoggedIn, (req, res) => {
        res.redirect('/dashboard');
    });

    router.get('/dashboard', isLoggedIn, (req, res) => {
        console.log('user: '+req.user);

        res.sendfile('app/client/public/html/index.html');
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

//Tasks >>
    router.get('/api/tasks', isLoggedIn, (req, res) => {
        Task.find({}, (err, tasks)=>{
            res.json(tasks);
        });        
    });

    router.post('/api/tasks/new', isLoggedIn,(req, res) => {
        var task = new Task();
            task.title = req.title;
            task.save();            
        res.sendStatus(200);
    });

    router.delete('/api/tasks/:id', isLoggedIn, (req, res) => {

    });

    router.put('/api/tasks/:id', isLoggedIn, (req, res) => {

    });
//<<

//Projects >>
    router.get('/project', isLoggedIn, (req, res) => {

    });
    router.post('/project/new', isLoggedIn, (req, res) => {

    });
    router.delete('/project/:id', isLoggedIn, (req, res) => {

    });
    router.put('/project/:id', isLoggedIn, (req, res) => {

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
    if (req.isAuthenticated()){
        return next();
    }
    console.log('Request failed. You should be logged in.');
    res.redirect('/login');
}

module.exports = router;