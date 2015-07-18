import gulp from 'gulp'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'

gulp.task('sass', () => {
  gulp.src('assets/scss/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('web/css'))
})

gulp.task('default', () => {
  gulp.watch('assets/**/*.*', ['sass'])
})
