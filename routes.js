'use strict';

var React        = require('react');
var Route        = require('react-router').Route;
var DefaultRoute = require('react-router').DefaultRoute;
var App          = require('./components/App.jsx');
var Dashboard    = require('./components/Dashboard.jsx');
var LandingPages = require('./components/LandingPages.jsx');
var EditLandingPage = require('./components/EditLandingPage.jsx');

module.exports = (
  <Route name="dash" handler={App} path="/">
    <Route name="landing-pages" handler={LandingPages} />
    <Route name="edit-landing-page" path="landing-pages/:name/edit" handler={EditLandingPage} />
    <DefaultRoute handler={Dashboard} />
  </Route>
)
