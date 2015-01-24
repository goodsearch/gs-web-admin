require('node-jsx').install({ extension: '.jsx' });

var koa       = require('koa');
var static    = require('koa-static');
var favicon   = require('koa-favicon');
var router    = require('koa-router');
var mount     = require('koa-mount');
var path      = require('path');
var React     = require('react');
var App       = React.createFactory(require('./components/App.jsx'));
var server    = koa();
var api       = require('./api.js');

server.use(
  favicon(path.resolve(__dirname + '/../build/images/favicon.ico'))
);
server.use(static('build'));
server.use(router(server));

// routes
var APIRouter    = new router();
var ClientRouter = new router();

var renderToReact = function *() {
  this.body = React.renderToString(App({ path: this.path }));
};

var renderToClientReact = function *() {
  this.body = React.renderToString(ClientApp({ path: this.path }));
};

APIRouter.get('/landing-pages', api.getAllLandingPages);
APIRouter.get('/landing-pages/:name', api.getLandingPage);

server.use(mount('/api', APIRouter.middleware()));

// 404 handling (pass it back to react)
server.use(function *(next) {
  yield next;
  var status = this.status || 404;
  if (status === 404) yield renderToReact;
});

server.listen(8000);
