var gulp   = require('gulp');
// var uglify = require('gulp-uglify');

require('./browserify.js');

gulp.task('build:production:js', ['browserify']);
