var gulp    = require('gulp');
var nodemon = require('gulp-nodemon');
var package = require('../../package.json');

gulp.task('nodemon', function() {
  return nodemon({
    script:   package.main,
    execMap:  { js: 'npm start' }
  });
});
