require('node-jsx').install({ extension: '.jsx' });

var koa        = require('koa');
var favicon    = require('koa-favicon');
var serialize  = require('serialize-javascript');
var React      = require('react');
var ReactAsync = require('react-async');
var App        = require('./src/react/components/App.jsx');
var server     = koa();

// middleware
server.use(favicon(__dirname + '/build/images/favicon.ico'));

// routes
server.use(function *() {
  ReactAsync.renderToStringAsync(App({ path: this.path }, function(err, markup) {
    this.body = "<!DOCTYPE html>" + markup;
  }));
});

server.listen(8000);
