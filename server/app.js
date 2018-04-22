"use strict"
//require
var express = require('express'),
bodyParser = require('body-parser'),
request = require('request'),
path = require('path');
//Populate process.env variable
require('dotenv').config();

var app = express();
//Middleware
app.use(express.static(path.join(__dirname, '/..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Routing
app.get('/', function (req, res){
    res.sendFile('../public/index.html', {root: __dirname});

    //console.log(req.url);
});

//Add external routes
// app.use(require('./sql_routes/sql-routes'));
app.use(require('./routes/python/py-routes'));

app.listen(process.env.APP_PORT, function (){
    console.log('Server listening on  : '+process.env.APP_PORT);
});

