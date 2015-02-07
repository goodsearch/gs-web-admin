'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'Masthead',

  getDefaultProps: function() {
    return {
      title: 'Admin'
    };
  },

  render: function() {
    return(
      <div className="admin-masthead">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
});
