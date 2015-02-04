var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('default', function() {
  // place code for your default task here
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['sp_push']);
    gulp.watch('*.html', ['sp_push']);
});

gulp.task('sp_push', shell.task([
  './sp.sh push'
]))