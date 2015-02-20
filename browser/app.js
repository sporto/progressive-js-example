var React = require('react');
var Main = require('../components/main.jsx');

var renderTarget = document.getElementById('app');

React.render(
	Main({}),
	renderTarget
);