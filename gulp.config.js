module.exports = function () {
    var config ={
        bower_js : "bower_components/**/*.min.js",
        bower_css : "bower_components/**/css/*.css",
        bower_fonts : "bower_components/bootstrap/dist/fonts",
        bower_angular: "bower_components/angular-component-router/angular_1_router.js",
        public: 'app/client/public',
        public_css : "app/client/public/css",
        public_js : "app/client/public/libs/js"
    }
    return config;
}