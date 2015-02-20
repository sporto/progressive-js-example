// return the compiled layout
var Handlebars  = require('handlebars');
var fs          = require('fs');

var layoutFile = fs.readFileSync(__dirname + '/../templates/layout.handlebars').toString();
var layoutTemplate = Handlebars.compile(layoutFile);

module.exports = layoutTemplate;