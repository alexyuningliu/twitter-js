var express = require('express');
var morgan = require('morgan');
var swig = require('swig');

var app = express();

app.use(morgan('dev'));

app.get('/', function(req, res) {
	console.log('server listening');
	res.send('hello world');
});

app.listen('3000');