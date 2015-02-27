/** @jsx React.DOM */

// This is a stateless component

var React = require('react');

module.exports = React.createClass({

	propTypes: {
		library: React.PropTypes.object.isRequired
	},

	render: function () {
		var library = this.props.library;

		return (
			<tr>
				<td>{library.name}</td>
				<td>{library.authors}</td>
				<td>{library.homepage_uri}</td>
			</tr>
		);
	}
});