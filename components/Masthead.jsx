'use strict';

var React = require('react');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      title: 'Admin'
    };
  },

  displayName: 'Masthead',

  render: function() {
    return(
      <div className="admin-masthead">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
});
