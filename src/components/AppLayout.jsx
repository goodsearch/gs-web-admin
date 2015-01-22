var React = require('react');
var Header = require('./Header.jsx');

var AppLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head lang="en">
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="/css/app.css" />
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

module.exports = AppLayout;
