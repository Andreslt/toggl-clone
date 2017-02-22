var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//Database
var user = require('../db/schemas').user;
var task = require('../db/schemas').task;
var project = require('../db/schemas').project;

router.get('/', (req, res)=>{
    
});

module.exports = router;