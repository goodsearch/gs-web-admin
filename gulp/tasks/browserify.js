var browserify   = require('browserify');
var bundleLogger = require('../util/bundleLogger');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');
var config       = require('../config').browserify;
var reactify     = require('reactify');
var _            = require('lodash');
var buffer = require('vinyl-buffer');

var browserifyTask = function(callback, devMode) {
  var bundleQueue = config.bundleConfigs.length;

  if (devMode) {
    var browserSync  = require('browser-sync');
    var watchify     = require('watchify');
  }

  var browserifyThis = function(bundleConfig) {
    if(devMode) {
      _.extend(bundleConfig, watchify.args, { debug: true });
      // a watchify require/external bug that prevents proper recompiling, so
      // (for now) we'll ignore these options during development
      bundleConfig = _.omit(bundleConfig, ['external', 'require']);
    }

    var b = browserify(bundleConfig);

    var bundle = function() {
      bundleLogger.start(bundleConfig.outputName);

      return b
        .transform(reactify)
        .bundle()
        .on('error', handleErrors)
        .pipe(source(bundleConfig.outputName))
        .pipe(buffer())
        .pipe(gulp.dest(bundleConfig.dest))
        .on('end', reportFinished);
    };

    if(devMode) {
      b = watchify(b.pipe(browserSync.reload({ stream: true })));
      b.on('update', bundle);
      bundleLogger.watch(bundleConfig.outputName);
    } else {
      if(bundleConfig.require) b.require(bundleConfig.require);
      if(bundleConfig.external) b.external(bundleConfig.external);
    }

    var reportFinished = function() {
      bundleLogger.end(bundleConfig.outputName);

      if(bundleQueue) {
        bundleQueue--;
        if(bundleQueue === 0) callback();
      }
    };

    return bundle();
  };

  config.bundleConfigs.forEach(browserifyThis);
};

gulp.task('browserify', browserifyTask);

module.exports = browserifyTask;
