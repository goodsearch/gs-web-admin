var React     = require('react');
var Link      = require('react-router-component').Link;

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>I&rsquo;m the homepage!</h1>
        <Link href="/landing-pages/john">John&rsquo;s Landing Page</Link>
      </div>
    );
  }
});

module.exports = Home;
