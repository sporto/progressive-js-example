/** @jsx React.DOM */

var React      = require('react');
var List       = require('./list.jsx');
var SearchForm = require('./search_form.jsx');
var Router     = require('react-router');
var SA         = require('superagent');

module.exports = React.createClass({

	displayName: '/client/components/libraries-st.jsx',

	mixins : [Router.Navigation, Router.State],

	getInitialState: function () {
		return {
			keyword: '',
			busy: false,
			libraries: []
		}
	},

	componentWillMount: function() {
		console.log(this.displayName, 'componentWillMount');
		return this.getItems();
	},

	componentWillReceiveProps: function (props) {
		console.log(this.displayName, 'componentWillReceiveProps');
		return this.getItems();
	},

	onSearch: function (keyword) {
		if (keyword) {
			if (keyword !== this.state.keyword) this.transitionTo('libraries', {}, {keyword: keyword});
		}
	},

	getItems: function () {
		console.log(this.displayName, 'getItems');

		var comp = this;
		var query   = this.getQuery();
		var keyword = query.keyword;
		console.log('keyword', keyword);

		if (keyword) {
			if (keyword === this.state.keyword) return;

			this.setState({
				keyword: keyword,
				busy: true,
				libraries: []
			});

			var url = "https://rubygems.org/api/v1/search.json?query=" + keyword;
			url = 'http://cors.maxogden.com/' + url;
			console.log('url', url);

			return SA.get(url)
				.type('json')
				.end(function (error, res) {
					console.log(error);
					console.log(res.body);
					if (res) {
						comp.setState({
							libraries: res.body,
							busy: false
						});
					}
				});
		}
	},

	renderList: function () {
		if (this.state.busy) {
			return (
				<div className="alert alert-info" role="alert">Searching ...</div>
			)
		}

		if (!this.state.keyword) {
			return (
				<div className="alert alert-warning" role="alert">Please enter a keyword</div>
			)
		}

		return <List libraries={this.state.libraries} />
	},

	render: function () {

		return (
			<section>
				<h2>Libraries</h2>
				<SearchForm
					keyword={this.state.keyword}
					busy={this.state.busy}
					onSearch={this.onSearch}
					/>
				<br />
				{this.renderList()}
			</section>
		);
	}
});