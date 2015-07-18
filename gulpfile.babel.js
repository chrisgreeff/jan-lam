import gulp from 'gulp'
import sass from 'gulp-sass'

gulp.task('sass', () => {
  gulp.src('assets/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('web/css'))
})
