var gulp         = require('gulp');
var browserify   = require('browserify');
var reactify     = require('reactify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var notify = require('gulp-notify');
var to5ify = require('6to5ify');

module.exports = runBrowserifyTask = function(options, cb) {
  // create only one bundle for vendor dependencies
  var vendorBundler = browserify({
    debug: true
  }).require('react');

  var appBrowserifyOpts = {
    debug:         true,
    cache:         {},
    packageCache:  {},
    fullPaths:     true
  };

  // application bundle
  var bundler = browserify(appBrowserifyOpts)
    .require(require.resolve('../../browser.js'), { entry: true })
    .transform(to5ify)
    .transform(reactify)
    .external('react');

  // actual rebundle process
  var rebundle = function() {
    var start = Date.now();
    bundler.bundle()
      .pipe(source('browser.js'))
      .pipe(gulpif(options.uglify, streamify(uglify())))
      .pipe(gulp.dest(options.dest))
      .pipe(notify(function () {
        console.log('Built in ' + (Date.now() - start) + 'ms');
      }));
  };

  // fire watchify in development
  if (options.watch) {
    bundler = watchify(bundler);
    bundler.on('update', rebundle);
  }

  // run the vendor bundle when the default gulp task starts
  vendorBundler.bundle()
    .pipe(source('vendor.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest(options.dest));

  return rebundle();
};

gulp.task('browserify', function() {
  runBrowserifyTask({
    watch:   false,
    dest:    'dist/assets',
    uglify:  true
  });
});
