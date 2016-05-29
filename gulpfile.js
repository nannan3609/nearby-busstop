/**
 * Created by nannan on 16/5/28.
 */
var gulp=require('gulp');
var sass=require('gulp-sass');

gulp.task('default',function(){
    return gulp.src('./stylesheet/busstop.scss')
        .pipe(sass())
        .pipe(gulp.dest('./stylesheet'));
});
