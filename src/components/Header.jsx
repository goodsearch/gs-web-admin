var React = require('react');
var Link  = require('react-router-component').Link;

var Header = React.createClass({
  render: function() {
    return (
      <nav>
        <h1>Navigation here!</h1>
        <Link href="/">Home</Link>
      </nav>
    );
  }
});

module.exports = Header;
