var React        = require('react');
var Router       = require('react-router-component');

var LandingPage = React.createClass({
  render: function() {
    return (
      <h1>Viewing the landing page: {this.props.name}</h1>
    );
  }
});

module.exports = LandingPage;
