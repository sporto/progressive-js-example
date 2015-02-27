/** @jsx React.DOM */

var React         = require('react');
var Router        = require('react-router');
var Routes         = require('./routes.jsx');

Router.run(Routes, Router.HistoryLocation, function (Handler) {
	if (typeof document !== 'undefined' && document) {
		var mountNode = document.getElementById('app');
		React.render(<Handler/>, mountNode);
	}
});