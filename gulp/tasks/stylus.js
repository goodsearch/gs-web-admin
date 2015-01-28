var gulp         = require('gulp');
var stylus       = require('gulp-stylus');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').stylus;
var autoprefixer = require('gulp-autoprefixer');

gulp.task('stylus', function() {
  if (process.env.NODE_ENV == 'production') {
    return gulp.src(config.src)
      .pipe(stylus(config.settings))
      .pipe(autoprefixer({ browsers: ['last 2 version'] }))
      .pipe(gulp.dest(config.dest));
  } else {
    var browserSync  = require('browser-sync');
    var sourcemaps   = require('gulp-sourcemaps');

    return gulp.src(config.src)
      .pipe(sourcemaps.init())
      .pipe(stylus(config.settings))
      .on('error', handleErrors)
      .pipe(sourcemaps.write())
      .pipe(autoprefixer({ browsers: ['last 2 version'] }))
      .pipe(gulp.dest(config.dest))
  }
});
