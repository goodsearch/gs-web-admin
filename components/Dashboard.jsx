'use strict';

var React  = require('react');
var Layout = require('./Layout.jsx');

module.exports = React.createClass({
  displayName: 'Dashboard',

  render: function() {
    return (
      <Layout current="dash" title="Dashboard">
        <p>Main Admin Dashboard</p>
      </Layout>
    );
  }
});
