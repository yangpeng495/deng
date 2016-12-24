var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
var list = [];
app.get('/',function (req,res){
    res.sendFile(path.resolve('assign.html'));
});
app.post('/assign', function (req, res) {
    list.push(req.body);
    res.redirect('/login');
});
app.get('/login', function (req, res) {
    res.sendFile(path.resolve('login.html'));
});
app.post('/loginup',function(req, res) {
    var flag = list.find(function(item) {
        return  item.username == req.body.username && item.password == req.body.password;
    });
    if(flag) {
        res.sendFile(path.resolve('ind.html'));
    } else {
        res.redirect('/login');
    }
});
app.listen(8300);

