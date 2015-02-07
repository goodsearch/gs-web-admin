'use strict';

require('node-jsx').install({ extensionn: '.jsx' });

var koa          = require('koa');
var staticRoutes = require('koa-static');
var Router       = require('react-router');
var routes       = require('./routes.js');
var React        = require('react');

var app = koa();

app.use(staticRoutes('dist/assets'));

// ignore favicon
app.use(function *(next) {
  if (this.path === '/favicon.ico') {
    this.body = '';
  } else {
    yield next;
  }
});

app.use(function *() {
  Router.run(routes, this.path, function(Handler) {
    this.body = React.renderToString(
      React.createElement(Handler, { path: this.path })
    );
  }.bind(this));
});

var port = process.env.PORT || 5000;
app.listen(port);
