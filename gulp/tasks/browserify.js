var browserify   = require('browserify');
var bundleLogger = require('../util/bundleLogger');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');
var config       = require('../config').browserify;
var reactify     = require('reactify');
var _            = require('lodash');

var browserifyTask = function(callback, devMode) {
  var bundleQueue = config.bundleConfigs.length;

  if (devMode) {
    var browserSync  = require('browser-sync');
    var watchify     = require('watchify');
  }

  var browserifyThis = function(bundleConfig) {
    if(devMode) {
      // Add watchify args and debug (sourcemaps) option
      _.extend(bundleConfig, watchify.args, { debug: true });
      // a watchify require/external bug that prevents proper recompiling, so
      // (for now) we'll ignore these options during development
      bundleConfig = _.omit(bundleConfig, ['external', 'require']);
    }

    var b = browserify(bundleConfig);

    var bundle = function() {
      // log when bundling starts
      bundleLogger.start(bundleConfig.outputName);

      return b
        .transform(reactify)
        .bundle()
        // report compile errors
        .on('error', handleErrors)
        // use vinyl-source-stream to make the stream gulp-compatible. Specify
        // the disired output filename here
        .pipe(source(bundleConfig.outputName))
        .pipe(gulp.dest(bundleConfig.dest))
        .on('end', reportFinished);
    };

    if(devMode) {
      // wrap with watchify and rebundle on changes
      b = watchify(b.pipe(browserSync.reload({ stream: true })));
      // rebundle on update
      b.on('update', bundle);
      bundleLogger.watch(bundleConfig.outputName);
    } else {
      // sort out shared dependencies
      // b.require exposes modules externally
      if(bundleConfig.require) b.require(bundleConfig.require);

      // b.external excludes modules from the bundle, and expects they'll be
      // available externally
      if(bundleConfig.external) b.external(bundleConfig.external);
    }

    var reportFinished = function() {
      bundleLogger.end(bundleConfig.outputName);

      if(bundleQueue) {
        bundleQueue--;

        if(bundleQueue === 0) {
          // if the queue is empty, tell gulp the task is complete
          callback();
        }
      }
    };

    return bundle();
  };

  // start bundling with browserify for reach bundleConfig specified
  config.bundleConfigs.forEach(browserifyThis);
};

gulp.task('browserify', browserifyTask);

// exporting so we can call it directly in the watch task, with devMode option
module.exports = browserifyTask;
