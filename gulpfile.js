var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var del = require('del');
var gulp_config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({lazy: true}); 

// gulp.task('default', ()=>{
//     return gulp.src('./bower_components/**/*.js')
//         .pipe()
//         .pipe()
// });

gulp.task('default', ['bower_css', 'bower_js', 'bower_fonts', 'bower_angular_router', 'bower_angular_components', 'bower_angular_resource', 'bower_moment'], () => {
    browserSync.init(null,{
        // server: gulp_config.public_html
        proxy: "http://localhost:9000", // port of node server
    });
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
        .pipe(gulp.dest(gulp_config.public_fonts))
});

// bower_angular_router
gulp.task('bower_angular_router', ()=>{
    return gulp.src(gulp_config.bower_angular_router)
        .pipe($.flatten())
        .pipe(gulp.dest(gulp_config.public_js))
});

// bower_angular_resource
gulp.task('bower_angular_resource', ()=>{
    return gulp.src(gulp_config.bower_angular_resource)
        .pipe($.flatten())
        .pipe(gulp.dest(gulp_config.public_js))
});

// bower_angular_components
gulp.task('bower_angular_components', ()=>{
    return gulp.src(gulp_config.bower_angular_components)
        .pipe($.flatten())
        .pipe(gulp.dest(gulp_config.public_js))
});

// bower_moment files
gulp.task('bower_moment', ()=> {
    return gulp.src(gulp_config.bower_moment)
        .pipe($.flatten())
        .pipe(gulp.dest(gulp_config.public_css))
});