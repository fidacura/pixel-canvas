var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('styles', function () {
    return gulp.src('styles/*.scss')
			.pipe(sass())
			.pipe(gulp.dest('styles/css'))
    	.pipe(browserSync.stream());
});

gulp.task('server', ['styles'], function() {
    browserSync.init({
    	server: "./",
			port: 9000
    });
    gulp.watch("styles/*.scss", ['styles']);
    gulp.watch("sketches/*.js").on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', ['server']);
