'use strict';

var React = require('react');
var Link  = require('react-router').Link;

module.exports = React.createClass({
  displayName: 'Footer',

  render: function() {
    return (
      <footer>
        <div className="well">
          <Link to="top">TOP</Link>
        </div>
      </footer>
    );
  }
});
