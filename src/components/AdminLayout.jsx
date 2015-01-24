var React = require('react');
var Header = require('./Header.jsx');

var AdminLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head lang="en">
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="/css/app.css" />
          <link rel="stylesheet" href="/css/theme.css" />
        </head>
        <body>
          <div id="main">
            <Header />
            {this.props.children}
          </div>
          <script defer src="/js/client.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = AdminLayout;
