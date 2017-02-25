(function () {
    var componentApp = angular.module('componentApp')

        .component('project', {
            templateUrl: "../../../html/templates/projects.html",
            controller: ['$http', projectController],
            controllerAs: 'vm',
        });

    function projectController($http) {
        var vm = this;
        vm.user = "";
        vm.tasks = [];

        getUser($http)
            .then((user) => {
                vm.user = user;
            });
    }
}())