var React   = require('react');
var Link    = require('react-router-component').Link;
var Async   = require('react-async');
var request = require('superagent');
var _       = require('lodash');

var ListItemWrapper = React.createClass({
  render: function() {
    return (
      <li>
        <Link href={'/landing-pages/' + this.props.data.name}>{this.props.data.name}</Link>
      </li>
    );
  }
});

var LandingPages = React.createClass({
  mixins: [Async.Mixin],

  getInitialStateAsync: function(cb) {
    request.get('/api/landing-pages', function(resp) {
      cb(null, resp.body);
    });
  },

  render: function() {
    return (
      <ul>
        {_.map(this.state.pages, function(page) {
          return <ListItemWrapper key={page._id} data={page} />
        })}
      </ul>
    );
  }
});

module.exports = LandingPages;
