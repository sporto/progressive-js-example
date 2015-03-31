// this allows using jsx directly
//require('node-jsx').install();
require("babel/register")({experimental: true});

var express     = require('express');
var MainHandler = require('./handlers/main');
var log         = require('loglevel');

var app = express();
app.use(express.static(__dirname + '/public'));

app.get('*', MainHandler);

app.listen(3000, function() {
	console.log("Listening on port 3000");
});

log.setLevel('info');