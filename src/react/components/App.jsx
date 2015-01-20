var React     = require('react');
var Router    = require('react-router-component');
var Locations = Router.locations;
var Location  = Router.location;
var PostList  = require('./PostList.jsx');
var PostView  = require('./PostView.jsx');

// interpolate assets in the below component, from the generated manifest file
// if production
var App = React.createClass({
  render: function() {
    return (
      <html>
        <head lang="en">
          <meta charSet="utf-8" />
          <title>React App</title>
          <link rel="stylesheet" href="/styles/app.css" />
        </head>
        <body>
          <div id="main">
            <Locations path={this.props.path}>
              <Location path="/" handler={PostList} />
              <Location path="/post/:id" handler={PostView} />
            </Locations>
          </div>
          <script type="text/javascript" src="/js/react/bundle.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = App;
