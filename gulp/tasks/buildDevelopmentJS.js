var gulp   = require('gulp');

require('./browserify.js');

gulp.task('build:development:js', ['browserify']);
