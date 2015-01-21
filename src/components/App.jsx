var React        = require('react');
var Router       = require('react-router-component');
var Template     = require('./Template.jsx');
var NotFoundPage = require('./NotFoundPage.jsx');
var Dummy        = require('./Dummy.jsx');
var _            = require('lodash');
var Locations    = Router.Locations;
var Location     = Router.Location;
var NotFound     = Router.NotFound

var App = React.createClass({
  render: function() {
    return (
      <Template>
        <Locations path={this.props.path}>
          <Location path="/" handler={Dummy} />
          <NotFound handler={NotFoundPage} />
        </Locations>
      </Template>
    );
  }
});

module.exports = App;
