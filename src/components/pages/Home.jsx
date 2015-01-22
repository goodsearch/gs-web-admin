var React            = require('react');
var Reflux           = require('reflux');
var AEditableWrapper = require('../AEditableWrapper.jsx');
var pageStore        = require('../../stores/pageStore.js');

var Home = React.createClass({
  mixins: [Reflux.connect(pageStore, 'page')],

  getInitialState: function() {
    return {
      testElement: {}
    };
  },

  render: function() {
    return (
      <div>
        <h1>I&rsquo;m the homepage!</h1>
        <AEditableWrapper element={this.state.testElement} widgetName='hero-001' />
      </div>
    );
  }
});

module.exports = Home;
