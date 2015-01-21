require('node-jsx').install({ extension: '.jsx' });

var koa       = require('koa');
var static    = require('koa-static');
var favicon   = require('koa-favicon');
var serialize = require('serialize-javascript');
var React     = require('react');
var App       = React.createFactory(require('./components/App.jsx'));
var server    = koa();

// middleware
server.use(favicon(__dirname + '../build/images/favicon.ico'));
server.use(static('build/js'));
server.use(static('build/images'));
server.use(static('build/css'));

// routes
server.use(function *() {
  console.log('server request received');
  this.body = React.renderToString(App({ path: this.path }));
});

server.listen(8000);
