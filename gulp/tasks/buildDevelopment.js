var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build:development', function(cb) {
  runSequence(
    'build:clean',
    'images',
    'build:development:css',
    'watchify',
    'watch',
    cb
  );
});
