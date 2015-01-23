var HeroBlock   = require('./blocks/Hero.jsx');
var ListBlock   = require('./blocks/List.jsx');
var BlockCreate = require('./blocks/Create.jsx');
// var CTABlock

module.exports = function(blockType) {
  if (/^hero/.test(blockType)) {
    var variant = (blockType.match(/^hero-(\d+)$/) || [])[1];
    return { element: HeroBlock, variant: variant };
  } else if (/^list/.test(blockType)) {
    var variant = (blockType.match(/^list-(\d+)$/) || [])[1];
    return { element: ListBlock, variant: variant };
  } else {
    return { element: BlockCreate };
  }
};
