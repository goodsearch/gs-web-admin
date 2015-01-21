var React = require('react');
var Header = require('./Header.jsx');

var Template = React.createClass({
  render: function() {
    return (
      <html>
        <head lang="en">
          <meta charSet="utf-8" />
          <title>React App</title>
          <link rel="stylesheet" href="/app.css" />
        </head>
        <body>
          <div id="main">
            <Header />
            {this.props.children}
          </div>
          <script defer src="/client.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = Template;
