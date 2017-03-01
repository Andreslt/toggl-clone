var express = require('express');
var router = express.Router();
var passport = require('passport');

//Database
var User = require('../db/schemas').user;
var Task = require('../db/schemas').task;
var Project = require('../db/schemas').project;

//dashboard & Login >>
    router.get('/', isLoggedIn, (req, res) => {
        console.log('dashboard reached!')
        res.redirect('/dashboard');
    });

    router.get('/dashboard', isLoggedIn, (req, res) => {
        res.sendfile('app/client/public/html/index.html');
    });

    router.get('/login', (req, res) => {
        res.sendfile('app/client/public/html/login.html')
    });

    router.get('/projects', isLoggedIn, (req, res) => {
        res.sendfile('app/client/public/html/projects.html')
    });

    router.get('/logout', function (req, res) {
        req.logout();
        req.session.destroy(function (err) {
            if(err) console.log(err);
            res.redirect('/login');
        });        
    });
//<<

//User >>
    router.get('/api/user', isLoggedIn, (req, res) => {
            res.json(req.user);
    });
//<<

//Tasks >>
    router.get('/api/tasks', isLoggedIn, (req, res) => {
        Task.find({user_id: req.user},(err, tasks)=>{
            res.json(tasks);
        }).sort({ 'created_at': -1 });
    });

    router.post('/api/tasks/new', isLoggedIn,(req, res) => {
        var task = new Task();
        // console.log('summary: '+JSON.stringify(req.body.summary));
            task.title = req.body.title;
            task.user_id = req.user._id;
            task.summary = req.body.summary;
            task.save();
        res.sendStatus(200);
    });

    router.delete('/api/tasks/:id', isLoggedIn, (req, res) => {
        Task.findOneAndRemove({_id: req.params.id}, (result, err)=>{
            console.log('result: '+result);
        })
    });

    router.put('/api/tasks/:id', isLoggedIn, (req, res) => {

    });
//<<

//Projects >>
    router.get('/api/projects', isLoggedIn, (req, res) => {
        Project.find({}, (err, projects)=>{
            res.json(projects);
        });  
    });

    router.post('/api/projects/new', isLoggedIn, (req, res) => {
        Project.save({
            title: req.body.title,
            user_id: req.user            
        });
    });

    router.delete('/api/projects/:id', isLoggedIn, (req, res) => {

    });

    router.put('/api/projects/:id', isLoggedIn, (req, res) => {

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