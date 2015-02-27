/** @jsx React.DOM */

var React      = require('react');
var Router     = require('react-router');
var Library    = require('./library.jsx');

module.exports = React.createClass({

	displayName: '/client/components/libraries/list.jsx',

	// mixins : [Router.Navigation, Router.State],

	propTypes: {
		libraries: React.PropTypes.array.isRequired
	},

	render: function () {
		return (
			<table className="table">
				<thead>
					<tr>
						<td>Name</td>
						<td>Authors</td>
						<td>Home page</td>
					</tr>
				</thead>
				<tbody>
					{this.props.libraries.map(function (library, index) {
						return (<Library key={library.id} library={library} />)
					})}
				</tbody>
			</table>
		);
	}

});