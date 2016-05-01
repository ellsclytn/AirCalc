var gulp = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browser-sync').create()

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
})

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })

  gulp.watch('./**/*.scss', ['sass'])
  gulp.watch('./index.html').on('change', browserSync.reload)
})

gulp.task('default', ['browser-sync'], function() {
  gulp.watch('./sass/**/*.scss', ['sass'])
})
