var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public/dist/public'));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/exam2');

mongoose.Promise = global.Promise;

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

app.listen(9001, function(){
    console.log('Power level over 9000!!!!!!!');
})