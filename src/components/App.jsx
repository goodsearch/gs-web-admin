var React     = require('react');
var Router    = require('react-router-component');
var _         = require('lodash');
var Locations = Router.Locations;
var Location  = Router.Location;
var NotFound  = Router.NotFound
var AppLayout = require('./AppLayout.jsx');

var HomePage     = require('./pages/Home.jsx');
var LandingPage  = require('./pages/LandingPage.jsx');
var NotFoundPage = require('./pages/NotFoundPage.jsx');

var App = React.createClass({
  render: function() {
    return (
      <AppLayout>
        <Locations path={this.props.path}>
          <Location path="/" handler={HomePage} />
          <Location path="/landing-pages/:name" handler={LandingPage} />
          <NotFound handler={NotFoundPage} />
        </Locations>
      </AppLayout>
    );
  }
});

module.exports = App;
