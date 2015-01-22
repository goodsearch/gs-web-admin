var React = require('react');
var Link  = require('react-router-component').Link;

var Header = React.createClass({
  render: function() {
    return (
      <nav>
        <Link href="/"><h1>GS Web Admin</h1></Link>
        <ul>
          <li><Link href="/landing-pages">Landing Pages</Link></li>
        </ul>
      </nav>
    );
  }
});

module.exports = Header;
