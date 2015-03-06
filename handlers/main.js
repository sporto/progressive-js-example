var React          = require('react');
var Router         = require('react-router');
var Routes         = require('../client/routes.jsx');
var layoutTemplate = require('./layout');

module.exports = function (req, res) {
	// TODO we need to fetch the data before rending the app
	return Router.run(Routes, req.url, function(Handler) {
		var element = React.createElement(Handler);

		var renderedComponent = React.renderToString(element);
		var renderedLayout = layoutTemplate({
			content: renderedComponent
		});

		return res.send(renderedLayout);
	});

}
