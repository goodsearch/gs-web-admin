var React = require('react');
var ISVG  = require('react-inlinesvg');

var Create = React.createClass({
  getDefaultProps: function() {
    return {
      classNames: ['admin', 'block', 'create']
    };
  },

  render: function() {
    return (
      <div className={this.props.classNames.join(' ')}>
        <ISVG src="/images/plus.svg" />
      </div>
    );
  }
});

module.exports = Create;
