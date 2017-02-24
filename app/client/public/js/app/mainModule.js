(function () {
    var componentApp = angular
    .module('componentApp', ['ngResource', 'ngComponentRouter'])
    .config(function ($interpolateProvider) {
        $interpolateProvider.startSymbol('<%=');
        $interpolateProvider.endSymbol('=>');
    });
}())