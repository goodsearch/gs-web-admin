'use strict';

var React = require('react');
var Link  = require('react-router').Link;

module.exports = React.createClass({
  displayName: 'Nav',

  propTypes: {
    current: React.PropTypes.string
  },

  getNavItemClassName: function(routeName) {
    return React.addons.classSet({
      active: this.props.current === routeName
    });
  },

  render: function () {
    return (
      <ul className="nav">
        <li className={this.getNavItemClassName('first')}>
          <Link to="first">PageOne</Link>
        </li>
        <li className={this.getNavItemClassName('second')}>
          <Link to="second">PageTwo</Link>
        </li>
      </ul>
    );
  }
});
