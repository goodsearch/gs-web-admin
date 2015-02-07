var gulp              = require('gulp');
var runBrowserifyTask = require('./browserify');

gulp.task('watchify', function(callback) {
  runBrowserifyTask({
    watch:   true,
    dest:    'dist/assets',
    uglify:  false
  });
  callback();
});
