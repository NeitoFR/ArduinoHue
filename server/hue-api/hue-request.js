"use strict"
var request = require('request');
require('dotenv').config();

exports.setBrightness = function(bri, callback){
    bri = Math.floor(bri*255/1023);
    console.log("****Brightness wanted ", bri);
    
    
    var url = process.env.HUE_ADDRESS+process.env.HUE_USER+"/lights/"+process.env.LUM_WILL+"/state";
    console.log("****url of request", url);
    var options = {
        "url" : url,
        "method" : "PUT",
        "body" : JSON.stringify({
            "on" : true, 
            "bri" : bri
        })
    }
    request(options, function(err, httpResponse, body) {
        if(err){
            callback(err, null);
        }
        else
        {
            callback(null, body);
        }
    });
};
// app.get('/areaInfo', function(req, res){
//     console.log('Request get');
//     var data;
//     var options  = {
//         url: 'https://nrbdfpem.viacesi.fr:443/services/rest/control_restservice/getLuminaireLevelsForArea/2002',
//         method: 'GET',
//         headers:{
//             'Authorization': 'Basic d2hvdW06MDEyMzQ1Njc4YUE='
//         }
//     }
//     request(options, callback);

//     function callback(error, response, body) {
//         if (!error && response.statusCode == 200) {
//             data = JSON.parse(body);
//             console.log('Response for area info: ', data);
//             res.send(body).end();
//         }
//     }
// })