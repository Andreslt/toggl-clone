module.exports = function () {
    var config ={
        bower_js : "bower_components/**/*.min.js",
        bower_css : "bower_components/**/css/*.css",
        bower_fonts : "bower_components/bootstrap/dist/fonts/*.*",
        bower_angular_router: "bower_components/angular-component-router/angular_1_router.js", 
        bower_angular_components: "bower_components/angular-components/ui-components-0.0.1.min.js", 
        bower_angular_resource: "bower_components/angular-resource/angular-resource.min.js", 
        bower_moment: "bower_components/moment/min/moment.min.js",
        public_css : "app/client/public/css",
        public_js : "app/client/public/libs/js",
        public_fonts: 'app/client/public/fonts'
    }
    return config;
}