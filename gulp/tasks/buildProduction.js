require('gulp').task('build:production', [
  'stylus',
  'images',
  'build:production:js'
]);
