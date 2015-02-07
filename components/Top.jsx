'use strict';

var React      = require('react');
var Nav        = require('./Nav.jsx');
var Masthead   = require('./Masthead.jsx');
var UserAnchor = require('./UserAnchor.jsx');

module.exports = React.createClass({
  displayName: 'Top',

  render: function() {
    return (
      <div>
        <UserAnchor />
        <Nav current="dash" />
        <Masthead title="Dashboard" />
        <div className="admin-content">
          <p>Main Admin Dashboard</p>
        </div>
      </div>
    );
  }
});
