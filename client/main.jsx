/** @jsx React.DOM */

var React          = require('react');
var Router         = require('react-router');
var Routes         = require('./routes.jsx');
var AppFlux        = require('./flux/app.es6');
var flux           = new AppFlux();
var FluxComponent  = require('flummox/component');


// console.log('flux', flux)
// console.log('FluxComponent', FluxComponent)



Router.run(Routes, Router.HistoryLocation, function (Handler) {
	if (typeof document !== 'undefined' && document) {
		var mountNode = document.getElementById('app');

		var Wrapped = (
			<FluxComponent flux={flux} connectToStores={{
					libraries: function(store) {
						return ({
							libraries: store.libraries
						});
					}
				}}>
				// MessageList is injected with a `libraries` prop by FluxContainer
				<Handler />
			</FluxComponent>
		)

		React.render(<Wrapped />, mountNode);
	}
});