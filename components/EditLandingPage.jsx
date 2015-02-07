'use strict';

var React          = require('react');
var Router         = require('react-router');
var request        = require('superagent');
var Layout         = require('./Layout.jsx');
var ApiDownMessage = require('./ApiDownMessage.jsx');
var blockSelector  = require('gs-web').blockSelector;

module.exports = React.createClass({
  mixins: [Router.State],

  getInitialState: function() {
    return {
      loading: true,
      apiDown: false,
      page: { blocks: [] }
    };
  },

  getTitle: function() {
    return "Edit \"" + this.getParams().name + "\" Landing Page";
  },

  componentDidMount: function() {
    var url = 'http://localhost:8000/landing-pages/'+this.getParams().name+'.json';

    request.get(url).end(function(error, res) {
      if (error) {
        this.setState({ loading: false, apiDown: true });
      } else {
        this.setState({ page: res.body.page, loading: false });
      }
    }.bind(this));
  },

  getBlocks: function() {
    if (this.state.apiDown) return <ApiDownMessage />;

    return this.state.page.blocks.map(function(block) {
      var blockEl = blockSelector(block.blockType);
      var id = block.blockType + this.state.page.blocks.indexOf(block);

      return React.createElement(blockEl.element, {
        variant: blockEl.variant,
        data: block.data,
        assetPrefix: 'http://localhost:8001/lp/',
        key: id
      });
    }.bind(this));
  },

  render: function() {
    return (
      <Layout current="landing-pages" title={this.getTitle()}>
        <div className="basic">{this.getBlocks()}</div>
      </Layout>
    );
  }
});
