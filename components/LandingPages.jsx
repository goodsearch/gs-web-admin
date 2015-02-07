'use strict';

var React           = require('react');
var request         = require('superagent');
var Layout          = require('./Layout.jsx');
var LandingPageList = require('./LandingPageList.jsx');

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
      <Layout current="landing-pages" title="Landing Pages">
        <LandingPageList pages={this.state.pages} loading={this.state.loading} />
      </Layout>
    );
  }
});
