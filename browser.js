'use strict';

var React  = require('react');
var Router = require('react-router');
var routes = require('./routes.js');

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler path={window.location.pathname} />, document);
});
