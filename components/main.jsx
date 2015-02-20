var React = require('react');
var Two   = require('./two.jsx');

module.exports = React.createClass({

  render: function () {
    return (
      <div>
        <h1>Main</h1>
        <Two />
      </div>
    );
  }

});