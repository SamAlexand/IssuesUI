var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('default', function() {
  // place code for your default task here
});

// Watch Files For Changes and perform an action
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['sp_push']);
    gulp.watch('*.html', ['sp_push']);
});

gulp.task('sp_push', shell.task([
  // Call the Script Portlet's "sp push" command to deploy the 
  // application artifacts to the instance of the Script Portlet
  // specified in the sp_config.json file.  See the Script Portlet
  // help for more information.
  './sp.sh push'
]))
