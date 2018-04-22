"use strict"
var express = require('express'),
hue = require('../../hue-api/hue-request'),
app = module.exports = express.Router();

app.post('/setBrightness', function(req, res){
    console.log(req.body);
    hue.setBrightness(req.body.bri, function(err, data){
        if(err){ 
            //console.log('Request : SELECT * FROM USER_TABLE :: ERROR');
            res.status(400).send(err).end();
        }
        else{
            console.log('resp from hue :', data);
            
            res.status(200).end();
        }
    });
});