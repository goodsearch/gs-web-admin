var React     = require('react');
var ClientApp = React.createFactory(require('./components/ClientApp.jsx'));

if (typeof window !== 'undefined') {
  window.onload = function() {
    React.render(ClientApp(), document);
  };
}
