'use strict';

var React = require('react/addons');
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
      <div className="admin-nav">
        <ul>
          <li className={this.getNavItemClassName('dash')}>
            <Link to="dash">Dashboard</Link>
          </li>
          <li className={this.getNavItemClassName('landing-pages')}>
            <Link to="landing-pages">Landing Pages</Link>
          </li>
        </ul>
      </div>
    );
  }
});
