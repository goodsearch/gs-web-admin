var notify = require('gulp-notify');

module.exports = function() {
  var args = Array.prototype.slice.call(arguments);

  // send error to notification center with gulp-notify
  notify.onError({
    title:    'Compile Error',
    message:  '<%= error %>'
  }).apply(this, args);

  // keep gulp from hanging on this task
  this.emit('end');
};