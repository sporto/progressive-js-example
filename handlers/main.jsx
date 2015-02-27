/** @jsx React.DOM */

var React          = require('react');
var Router         = require('react-router');
var Routes         = require('../client/routes.jsx');
var layoutTemplate = require('./layout');
var resolveHash    = require('when/keys').all;

module.exports = function (req, res) {
	// TODO we need to fetch the data before rending the app
	return Router.run(Routes, req.url, function(Handler, state) {
		console.log('state', state)

		// create promises for fetching data
		var promises = state.routes.filter(function (route) {
			// gather up the handlers that have a static `fetchData` method
			// console.log(route)
			return route.handler.fetchData;
		}).reduce(function (promises, route) {
			// reduce to a hash of `key:promise`
			// console.log('state.params', state.params)
			// console.log('routes', )
			promises[route.name] = route.handler.fetchData(state.params, state.query);
			return promises;
		}, {});

		return resolveHash(promises).then(function (data) {
			console.log('data', data);
			console.log('data', data.libraries);
			var renderedComponent = React.renderToString(<Handler data={data} />);

			var renderedLayout = layoutTemplate({
				content: renderedComponent
			});

			return res.send(renderedLayout);
		});

	});

}
