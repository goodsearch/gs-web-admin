'use strict';

var Route        = require('react-router').Route;
var DefaultRoute = require('react-router').DefaultRoute;
var App          = require('./components/App.jsx');
var Top          = require('./components/Top.jsx');
var PageOne      = require('./components/PageOne.jsx');
var PageTwo      = require('./components/PageTwo.jsx');

module.exports = (
  <Route name="top" handler={App} path="/">
    <Route name="first" handler={PageOne} />
    <Route name="second" handler={PageTwo} />
    <DefaultRoute handler={Top} />
  </Route>
)
