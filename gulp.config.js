module.exports = function () {
    var config ={
        bower_js : "bower_components/**/*.min.js",
        bower_css : "bower_components/**/css/*.css",
        bower_angular: "bower_components/angular-component-router/angular_1_router.js",
        public_html: 'app/client/public',
        public_css : "app/client/public/css",
        public_js : "app/client/public/js",
        public_images : "app/client/public/images"
    }
    return config;
}