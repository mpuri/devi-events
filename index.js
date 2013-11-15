'use strict';
var express = require('express');
var exphbs  = require('express3-handlebars');
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main', extname:'.hbs'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/events/inhouse', function (req, res) {
	res.render('inhouse');
});

app.get('/events/offpremise', function (req, res) {
	res.render('offpremise');
});

app.use(express.static('public/'));
app.listen(3000);