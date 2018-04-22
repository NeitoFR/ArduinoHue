var express = require('express'),
app = module.exports = express.Router();

app.get('/allLedState', function(req, res){
    //console.log(allLedState);
    
    // console.log('Response : ', req.body);
    res.status(200).send(allLedState).end();
    // for(var i = 0; i < 6; i++){
    //     allLedState[i] = !allLedState[i];
    // }
});
app.post('/setBrightness', function(req, res){
    console.log(req.body);
    
    res.status(200).end();
});
app.get('/setBrightness', function(req, res){
    console.log(req.body);
    console.log("!!!");
    
    res.status(200).end();
});