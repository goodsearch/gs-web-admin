module.exports = {
  getLandingPage: function *() {
    this.type = 'json';
    this.body = {
      message: 'requested an api landing page for ' + this.params.name
    };
  }
};
