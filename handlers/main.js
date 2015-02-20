var React          = require('react');
var Main           = require('../components/main.jsx');
var layoutTemplate = require('./layout');

module.exports = function (req, res) {
	var renderedComponent = React.renderToString(
		Main({})
	);

	var renderedLayout = layoutTemplate({
		content: renderedComponent
	});

	return res.send(renderedLayout);
}
