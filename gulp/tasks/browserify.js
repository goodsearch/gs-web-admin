var gulp         = require('gulp');
var browserify   = require('browserify');
var reactify     = require('reactify');
var transform    = require('vinyl-transform');

var production = process.env.NODE_ENV === 'production';

gulp.task('browserify', function () {
  if (production) {
    var browserifyOpts = {};
  } else {
    var browserifyOpts = {
      debug:         true,
      cache:         {},
      packageCache:  {},
      fullPaths:     true
    };
  }

  var b = browserify(browserifyOpts).transform(reactify);

  var browserified = transform(function (filename) {
    b.add(filename);
    return b.bundle();
  });

  return gulp.src('./browser.js')
    .pipe(browserified)
    .pipe(gulp.dest('./dist/assets'));
});
