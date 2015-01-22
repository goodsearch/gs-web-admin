var React     = require('react');
var Reflux    = require('reflux');
var _         = require('lodash');
var pageStore = require('../stores/pageStore.js');

var AEditableWrapper = React.createClass({
  mixins: [Reflux.listenTo(pageStore, 'handleInputChange')],

  getInitialState: function() {
    return {
      href: this.props.element.content.href,
      text: this.props.element.content.text
    };
  },

  handleEditClick: function(e) {
    e.preventDefault();
    console.log(this.state.text, this.state.href);
  },

  handleInputChange: function(e, reactId) {
    // save change
    // this.state.text = this.refs.editableA.getDOMNode().text;
  },

  componentDidUpdate: function() {
    console.log('updated component!');
  },

  editableId: function() {
    this.props.widgetName + '.' + this.props.element.id;
  },

  render: function() {
    return (
      <a ref='editableA' href={this.state.href} onClick={this.handleEditClick} onInput={_.debounce(this.handleInputChange, 500)} contentEditable='true'>{this.state.text}</a>
    );
  }
});

module.exports = AEditableWrapper;
