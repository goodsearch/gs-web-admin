require('node-jsx').install({ extension: '.jsx' });

var koa       = require('koa');
var static    = require('koa-static');
var favicon   = require('koa-favicon');
var router    = require('koa-router');
var mount     = require('koa-mount');
var serialize = require('serialize-javascript');
var React     = require('react');
var mongoose  = require('mongoose');
var App       = React.createFactory(require('./components/App.jsx'));
var server    = koa();
var api       = require('./api.js');

// connect to mongo
mongoose.connect('mongodb://localhost/gs-web-admin');

server.use(favicon(__dirname + '../build/images/favicon.ico'));
server.use(static('build/js'));
server.use(static('build/images'));
server.use(static('build/css'));
server.use(router(server));

// routes
var APIRouter = new router();

var renderToReact = function *() {
  console.info('server request received');
  this.body = React.renderToString(App({ path: this.path }));
};

APIRouter.get('/landing-pages/:name', api.getLandingPage);

server.use(mount('/api', APIRouter.middleware()));

// 404 handling (pass it back to react)
server.use(function *(next) {
  yield next;
  var status = this.status || 404;
  if (status === 404) yield renderToReact;
});

server.listen(8000);
