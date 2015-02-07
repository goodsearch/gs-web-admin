'use strict';

var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({
  mixins: [Router.State],

  render: function() {
    return (<h1>Edit landing page for {this.getParams().name}</h1>);
  }
});
