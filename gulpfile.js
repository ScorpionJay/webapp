var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var del = require('del');

gulp.task('default',function(){
	gulp.src('js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(uglify())
		.pipe(concat('app.js'))
		.pipe(gulp.dest('build'))
	
});

gulp.task('build',function(){
	gulp.src('js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(uglify())
		.pipe(concat('app.js'))
		.pipe(gulp.dest('build'))
});

gulp.task('clean',function(){
	return del(['build']);
});

gulp.task('browser-sync',function(){
	var files = [
		'app/**/*.*'
	];
	
	browserSync.init(files,{
		server:{
			baseDir:'./app'
		}
	});
});


gulp.task('watch',function(){
	var watcher = gulp.watch('js/*.js',['build']);
	watcher.on('change',function(event){
		console.log('Event type: ' + event.type); // added, changed, or deleted
   		console.log('Event path: ' + event.path); // The path of the modified file
	});
});
