'use strict';

var React         = require('react');
var Router        = require('react-router');
var request       = require('superagent');
var Layout        = require('./Layout.jsx');
var blockSelector = require('gs-web').blockSelector;

module.exports = React.createClass({
  mixins: [Router.State],

  getInitialState: function() {
    return {
      loading: true,
      page: { blocks: [] }
    };
  },

  getTitle: function() {
    return "Edit \"" + this.getParams().name + "\" Landing Page";
  },

  componentDidMount: function() {
    var url = 'http://localhost:8000/landing-pages/'+this.getParams().name+'.json';

    request.get(url, function(res) {
      this.setState({ page: res.body.page, loading: false });
    }.bind(this));
  },

  getBlocks: function() {
    return this.state.page.blocks.map(function(block) {
      var blockEl = blockSelector(block.blockType);
      var id = block.blockType + this.state.page.blocks.indexOf(block);

      return React.createElement(blockEl.element, {
        variant: blockEl.variant,
        data: block.data,
        key: id
      });
    }.bind(this));
  },

  render: function() {
    return (
      <Layout current="landing-pages" title={this.getTitle()}>
        <ul className="basic">{this.getBlocks()}</ul>
      </Layout>
    );
  }
});
