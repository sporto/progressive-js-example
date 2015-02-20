var React = require('react');

module.exports = React.createClass({

  onClick: function () {
    console.log('You clicked');
  },

  render: function () {
    return (
      <div>
        <h2>Two</h2>
        <button onClick={this.onClick}>Click me 5</button>
      </div>
    );
  }

});