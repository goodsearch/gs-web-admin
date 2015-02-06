'use strict';

var koa    = require('koa');
var static = require('koa-static');
var Router = require('react-router');
var routes = require('./routes.js');

var app = koa();

app.use(static('dist/assets'));

app.use(function *() {
  console.log(this.path);
  Router.run(routes, this.path, function(Handler) {
    this.body = React.renderToString(<Handler path={this.path} />);
  }.bind(this));
});

var port = process.env.PORT || 5000;
app.listen(port);
