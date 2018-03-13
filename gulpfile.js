var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');

var autoprefixerOptions = {
  browsers: [
      "Android 2.3",
      "Android >= 4",
      "Chrome >= 20",
      "Firefox >= 24",
      "Explorer >= 8",
      "iOS >= 6",
      "Opera >= 12",
      "Safari >= 6"
  ]
};

gulp.task('sass', function() {
  return gulp
  .src('./scss/styles.scss')
    .pipe(sass())
    .pipe(rename('styles.min.css'))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(cssnano())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  gulp.watch('./scss/styles.scss', ['sass']);
});
