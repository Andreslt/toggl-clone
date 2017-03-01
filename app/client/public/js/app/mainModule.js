(function () {
    var componentApp = angular
    .module('componentApp', ['ngResource', 'ngComponentRouter', 'ngRoute'])
    .config(function ($interpolateProvider, $routeProvider) {
        // $routeProvider
        // .when('/dashboard', {
        //     templateUrl : '../../html/templates/test.html'
        // })        
        $interpolateProvider.startSymbol('<%=');
        $interpolateProvider.endSymbol('=>');
    });
}())