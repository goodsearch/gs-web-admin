/*
 * Notes:
 *
 * - gulp/tasks/browserify.js handles js recompiling with watchify
 * - gulp/tasks/browserSync.js watches and reloads compiled files
 */

var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', ['browserSync'], function() {
  gulp.watch(config.stylus.src, ['stylus']);
  // gulp.watch(config.images.src, ['images']);
  // watchify takes care of JS, so no need to watch for it here
});
