// this allows using jsx directly
//require('node-jsx').install();
require("babel/register")({experimental: true});

var express     = require('express');
var MainHandler = require('./handlers/main');

var app = express();
app.use(express.static(__dirname + '/public'));

app.get('*', MainHandler);

app.listen(3000, function() {
	console.log("Listening on port 3000");
});


// var Marty = require('marty');
// var Router = require('react-router');

// var routes = [
//     <Route name='foo' path='/foo/:id' handler={Foo} />,
//     <Route name='var' path='/bar/:id' handler={Bar} />
// ];

// var app = express();

// app.use(require('marty-express')({
//   routes: routes,
//   marty: require('marty'),
//   rendered: function (diagnostics) {
//     console.log('Page rendered', diagnostics);
//   }
// }));