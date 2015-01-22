var React        = require('react');
var Async        = require('react-async');
var request      = require('superagent');
var NotFoundPage = require('./NotFoundPage.jsx');

var LandingPage = React.createClass({
  mixins: [Async.Mixin],

  getInitialStateAsync: function(cb) {
    request.get('/api/landing-pages/' + this.props.name, function(resp) {
      cb(null, resp.body);
    });
  },

  render: function() {
    if (this.state.message) {
      return (
        <h1>Viewing the landing page: {this.state.message}</h1>
      );
    } else {
      return <NotFoundPage />;
    }
  }
});

module.exports = LandingPage;
