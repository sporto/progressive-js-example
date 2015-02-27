/** @jsx React.DOM */

var React          = require('react');
var Router         = require('react-router');
var Link           = Router.Link;
var RouteHandler   = Router.RouteHandler;

module.exports = React.createClass({

	render: function () {
		return (
			<section>
				<h1>Root</h1>
				<ul className="nav nav-pills">
					<li><Link to='libraries'>Libraries</Link></li>
					<li><Link to='people'>People</Link></li>
				</ul>

				<div className="well">
					{/* this is the important part */}
					<RouteHandler />
				</div>
			</section>
		);
	}

});