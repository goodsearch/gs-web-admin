'use strict';

var React = require('react');
var Nav    = require('./Nav.jsx');
var Footer = require('./Footer.jsx');

module.exports = React.createClass({
  displayName: 'PageOne',

  render: function() {
    return (
      <div>
        <Nav current="first" />
        <h1>I&rsquo;m Page One!!</h1>
        <Footer />
      </div>
    );
  }
});
