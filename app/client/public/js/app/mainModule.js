(function () {
    var componentApp = angular
        .module('componentApp', ['ngResource'])

    .config(function ($interpolateProvider) {
        $interpolateProvider.startSymbol('<%=');
        $interpolateProvider.endSymbol('=>');
    });
}())