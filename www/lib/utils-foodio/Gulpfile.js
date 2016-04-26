var gulp   = require('gulp');
var babel  = require('gulp-babel');
var concat = require('gulp-concat');
var ngHtml2Js = require("gulp-ng-html2js");
var uglify = require('gulp-uglify');


var templatesSources = ['./src/templates/*.html']
var sources = ["./src/bootstrap.js", "./src/**/*.js"];

gulp.task('templates', function () {
  gulp.src(templatesSources)
     .pipe(ngHtml2Js({
        moduleName: "utils.foodio",
        prefix: "/templates/"
      }))
     .pipe(gulp.dest("./src/compiled-templates"));
});

gulp.task('babel', function () {
  gulp.src(sources)
    .pipe(babel())
    .pipe(concat('utils.foodio.js'))
    .pipe(gulp.dest('./'));
});



gulp.task('watch', function() {
  return gulp.watch(sources, ['babel']);
});

gulp.task('default', ['babel', 'watch']);
gulp.task('template', ['templates']);