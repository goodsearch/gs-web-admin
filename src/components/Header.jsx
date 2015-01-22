var React = require('react');
var Link  = require('react-router-component').Link;

var Header = React.createClass({
  render: function() {
    return (
      <nav>
        <h1>Landing Page CMS</h1>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/dummy">Dummy Page</Link></li>
        </ul>
      </nav>
    );
  }
});

module.exports = Header;
