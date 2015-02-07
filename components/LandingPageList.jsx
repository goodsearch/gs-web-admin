'use strict';

var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
  displayName: 'LandingPageList',

  render: function() {
    var pages = this.props.pages.map(function(page) {
      return (
        <li key={page.name}>
          <Link to="edit-landing-page" params={page}>{page.name}</Link>
        </li>
      );
    });

    pages.push(
      <li key="loading-message" className="loading-message">
        <span>Loading...</span>
      </li>
    );

    return (
      <ul className={this.props.loading ? 'loading' : ''}>{pages}</ul>
    );
  }
});
