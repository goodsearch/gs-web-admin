var Reflux        = require('reflux');
var WidgetActions = require('../actions/widget');

var pageStore = Reflux.createStore({
  listenables: [WidgetActions],

  onEditElement: function(data) {
    console.log(data);
    this.updateWidget(this.data);
  },

  updatePage: function(page) {
    localStorage.setItem('page', JSON.stringify(page));
    // db call, following in callback
    this.page = page;
    this.trigger(page);
  },

  getDefaultData: function() {
    var loadedElement = localStorage.getItem('page');

    if(!loadedElement) {
      this.element = {
        id:       'uc_001',
        elType:   'a',
        content:  { text: 'Click me!', href: 'http://www.cnn.com' }
      }
    } else {
      this.element = JSON.parse(loadedElement);
    }

    return this.element;
  }

});

module.exports = pageStore;
