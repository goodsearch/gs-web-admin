'use strict';

var React      = require('react');
var Nav        = require('./Nav.jsx');
var Masthead   = require('./Masthead.jsx');
var UserAnchor = require('./UserAnchor.jsx');
var LandingPageList = require('./LandingPageList.jsx');
var request    = require('superagent');

module.exports = React.createClass({
  displayName: 'LandingPages',

  getInitialState: function() {
    return {
      loading:  true,
      pages:    []
    };
  },

  componentDidMount: function() {
    request.get('http://localhost:8000/landing-pages.json', function(res) {
      this.setState({ pages: res.body.pages, loading: false });
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        <UserAnchor />
        <Nav current="landing-pages" />
        <Masthead title="Landing Pages" />
        <div className="admin-content">
          <LandingPageList pages={this.state.pages} loading={this.state.loading} />
        </div>
      </div>
    );
  }
});
