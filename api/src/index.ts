/// <reference path="../typings/tsd.d.ts" />

import express = require('express');
import bodyParser = require('body-parser');

import MemberRoutes = require('./routes/member.routes');
import EventRoutes = require('./routes/event.routes');

// New Code
var mongo = require('mongodb');
var monk = require('monk');

var db = monk('localhost:27017/goteamup');

var app = express();

// configure our app to use bodyParser(it let us get the json data from a POST)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req:any, res:any, next:any) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  next();
});

// Make our db accessible to our router
app.use(function(req:any, res:any, next:any){
    req.db = db;
    next();
});

var port:number = process.env.PORT || 8888;
var router = express.Router();

// Init routes
new MemberRoutes.MemberRoutes(db, router);
new EventRoutes.EventRoutes(db, router);

// prefixed all routes with /api
var prefix = '/api';
app.use(prefix, router);

// Start listening
console.log('http://127.0.0.1:' + port + prefix);
app.listen(port);
