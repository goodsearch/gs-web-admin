'use strict';

var React        = require('react');
var RouteHandler = require('react-router').RouteHandler;

module.exports = React.createClass({
  displayName: 'App',

  render: function() {
    return (
      <html lang="en">
        <head>
          <title>{this.props.path}</title>
          <link rel="stylesheet" href="/admin.css" />
          <link rel="stylesheet" href="http://localhost:8001/lp/basic-91c2ae71.css" />
        </head>
        <body>
          <div id="app" className="container">
            <RouteHandler />
          </div>
          <script src="/vendor.js"></script>
          <script src="/browser.js"></script>
        </body>
      </html>
    );
  }
});
