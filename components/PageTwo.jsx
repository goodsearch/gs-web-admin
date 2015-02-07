'use strict';

var React  = require('react');
var Nav    = require('./Nav.jsx');
var Footer = require('./Footer.jsx');

module.exports = React.createClass({
  displayName: 'PageTwo',

  render: function() {
    return (
      <div>
        <Nav current="first" />
        <div className="content">
          <h1>I&rsquo;m Page Two!!</h1>
        </div>
        <Footer />
      </div>
    );
  }
});
