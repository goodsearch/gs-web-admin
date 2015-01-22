var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name         : String,
  htmlFileName : String,
  modules      : []
});

schema.statics.getLandingPage = function(name, callback) {
  LandingPage.findOne({ 'name': name }, 'name htmlFileName').exec(function(err, page) {
    if(err) console.error(err);
    callback(page);
  });
};

module.exports = LandingPage = mongoose.model('LandingPage', schema);
