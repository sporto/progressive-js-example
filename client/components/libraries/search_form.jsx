/** @jsx React.DOM */

var React      = require('react');
// var Router     = require('react-router');

module.exports = React.createClass({

	displayName: '/client/components/libraries/search_form.jsx',

	// mixins : [Router.Navigation, Router.State],

	propTypes: {
		onSearch: React.PropTypes.func.isRequired,
		keyword:  React.PropTypes.string
	},

	getInitialState: function () {
		return {
			keyword: this.props.keyword
		}
	},

	onQueryChange: function (event) {
		this.setState({keyword: event.target.value});
	},

	onSearch: function () {
		var keyword = this.state.keyword;
		if (keyword) {
			this.props.onSearch(keyword);
		}
		return false;
	},

	render: function () {
		return (
			<form className="form-inline">
				<div className="form-group">
					<label for="keyword">Keyword</label>&nbsp;
					<input type="text"
						name="keyword"
						className="form-control"
						placeholder="Keyword"
						value={this.state.keyword}
						onChange={this.onQueryChange} />
				</div>
				 &nbsp;
				<button onClick={this.onSearch} className="btn btn-default">Search</button>
			</form>
		);
	}

});