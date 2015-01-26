var React         = require('react');
var Async         = require('react-async');
var request       = require('superagent');
var NotFoundPage  = require('./NotFoundPage.jsx');
var blockSelector = require('../blockSelector.js');
var _             = require('lodash');

var EditLandingPage = React.createClass({
  mixins: [Async.Mixin],

  getDefaultProps: function() {
    return {
      themeName: 'basic-theme'
    };
  },

  getInitialStateAsync: function(cb) {
    request.get('/api/landing-pages/' + this.props.name, function(resp) {
      cb(null, resp.body);
    });
  },

  render: function() {
    if (this.state.page) {
      var state           = this.state;
      var blocks          = state.page.blocks;
      var blockSeparators = [];

      blocks = _.map(blocks, function(block) {
        var blockEl = blockSelector(block.blockType);
        var id = block.blockType + state.page.blocks.indexOf(block);

        return React.createElement(blockEl.element, {
          variant:    blockEl.variant,
          data:       block.data,
          key:        id
        });
      });

      if (blocks.length > 1) {
        for (var i = 0; i < blocks.length + 1; i++) {
          blockSeparators.push(React.createElement(blockSelector().element, {
            key: 'separator:' + i
          }));
        }

        blocks = _.compact(_.flatten(_.zip(blockSeparators, blocks)));
      }

      return (
        <div className={this.props.themeName}>{blocks}</div>
      );
    } else {
      return <NotFoundPage />;
    }
  }
});

module.exports = EditLandingPage;
