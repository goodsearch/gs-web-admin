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
        </head>
        <body>
          <div id="app" className="container">
            <RouteHandler />
          </div>
          <script src="bundle.js"></script>
        </body>
      </html>
    );
  }
});
