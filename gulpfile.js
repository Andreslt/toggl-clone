var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var del = require('del');
var gulp_config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({lazy: true}); 

gulp.task('default', ()=>{
    return gulp.src('./bower_components/**/*.js')
        .pipe()
        .pipe()
});

gulp.task('default', ['bower_css', 'bower_js', 'bower_fonts', 'bower_angular'], () => {
    // browserSync.init({
    //     server: gulp_config.public_html
    // });
    console.log('done.')
});

// bower_css files
gulp.task('bower_css', ()=> {
    return gulp.src(gulp_config.bower_css)
        .pipe($.flatten())
        .pipe(gulp.dest(gulp_config.public_css))
});

// bower_js files
gulp.task('bower_js', ()=> {
    return gulp.src(gulp_config.bower_js)
        .pipe($.flatten())
        .pipe(gulp.dest(gulp_config.public_js))
});

// bower_fonts files
gulp.task('bower_fonts', ()=> {
    return gulp.src(gulp_config.bower_fonts)
        .pipe($.flatten())
        .pipe(gulp.dest(gulp_config.public))
});

// bower_angular
gulp.task('bower_angular', ()=>{
    return gulp.src(gulp_config.bower_angular)
        .pipe($.flatten())
        .pipe(gulp.dest(gulp_config.public_js))
});