/**
 * Created by Maksim on 12.02.2017.
 */
var express = require('express');
var app = express();
var expressJwt = require('express-jwt');
var bodyParser = require('body-parser');
var config = require('../config');

var staffAPI = require('./staff');

var path = require('path');

app.use('*', bodyParser.json());
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/../front/index.html'));
});

app.use('/angular', express.static('node_modules/angular'));
app.use('/angular-resource', express.static('node_modules/angular-resource'));
app.use('/angular-route', express.static('node_modules/angular-route'));
app.use('/angular-animate', express.static('node_modules/angular-animate'));
app.use('/bootstrap', express.static('node_modules/bootstrap'));
app.use('/modules', express.static('front/modules'));
app.use('/jquery', express.static('node_modules/jquery'));
app.use('/node',express.static('node'));

app.use('/style', express.static('style'));
app.use('/app', express.static('front'));
app.use('/pictures', express.static('pictures'));

//app.use('/', expressJwt({secret: config.jwtSecret}));

app.get('/staffs/list', staffAPI.getStaffs);
app.post('/staffs/create', staffAPI.createStaff);
app.get('/staffs/list/:id', staffAPI.getStaff);
app.put('/staffs/list/:id', staffAPI.updateStaff);
app.delete('/staffs/list/:id', staffAPI.removeStaff);

app.listen(1771);
console.log('App is running on port 1771');