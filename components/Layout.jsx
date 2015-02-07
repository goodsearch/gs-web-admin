'use strict';

var React      = require('react');
var Nav        = require('./Nav.jsx');
var Masthead   = require('./Masthead.jsx');
var UserAnchor = require('./UserAnchor.jsx');

module.exports = React.createClass({
  displayName: 'Layout',

  render: function() {
    return (
      <div>
        <UserAnchor />
        <Nav current={this.props.current} />
        <Masthead title={this.props.title} />
        <div className="admin-content">{this.props.children}</div>
      </div>
    );
  }
});
