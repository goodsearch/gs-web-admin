'use strict';

var React  = require('react');
var Nav    = require('./Nav.jsx');
var Footer = require('./Footer.jsx');

module.exports = React.createClass({
  displayName: 'Top',

  render: function() {
    return (
      <div>
        <header className="page-header">
          <h1>TopPageComponent</h1>
        </header>
        <Nav />
        <article>
          <p>Please do something</p>
        </article>
        <Footer />
      </div>
    );
  }
});
