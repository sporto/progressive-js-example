/** @jsx React.DOM */

var React         = require('react');
var Router        = require('react-router');
var Route         = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute  = Router.DefaultRoute;

var Root          = require('./components/root.jsx');
var Libraries     = require('./components/libraries/main.jsx');
var People        = require('./components/people.jsx');
var NotFound      = require('./components/not_found.jsx');


module.exports = (
	<Route handler={Root} path="/">
		<Route name='libraries' handler={Libraries} />
		<Route name='people' handler={People} />
		<DefaultRoute handler={Libraries} />
		<NotFoundRoute handler={NotFound} />
	</Route>
)