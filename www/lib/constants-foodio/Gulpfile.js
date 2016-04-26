var gulp = require('gulp');
var ngConstant = require('gulp-ng-constant');

gulp.task('constants', function () {
  var config = require('./src/config.json');
  var env = 'production';

  var envConfig = config[env];
  return ngConstant({
    name: 'constants.foodio',
    constants: envConfig,
    stream: true
  })
  .pipe(gulp.dest('dist'));
});


gulp.task('default', ['constants']);