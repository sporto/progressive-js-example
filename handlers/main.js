var React          = require('react');
var Router         = require('react-router');
var Routes         = require('../client/routes.ex6');
var layoutTemplate = require('./layout');
var Marty          = require('marty');
var log            = require('loglevel');

function nonIso(req, res) {
	var renderedLayout = layoutTemplate({
		content: ""
	});

	return res.send(renderedLayout);
}


function iso(req, res, next) {

	return Router.run(Routes, req.url, function(Handler, state) {
		console.log('Running routes', req.url);

		var context = Marty.createContext();

		context.req = req;
		context.res = res;

		var renderOptions = {
			type:    Handler,
			context: context,
			props:   state.params,
			timeout: 5000
		};

		function onRendered(renderResult) {
			log.info('onRendered', renderResult);

			var html = renderResult.html;

			var renderedLayout = layoutTemplate({
				content: html
			});

			res.send(renderedLayout).end();
		}

		function onFailedToRender (error) {
			console.log('error', error)
			res.status(500).end();
		}

		Marty
			.renderToString(renderOptions)
			.then(onRendered)
			.catch(onFailedToRender);

	});
}


module.exports = iso;