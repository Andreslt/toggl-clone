(function () {
    var componentApp = angular.module('componentApp')

        .component('firstTemplate', {
            templateUrl: "../../../html/templates/tasks.html",
            controller: ['$http', taskController],
            controllerAs: 'vm',
        });

    function taskController($http) {
        var vm = this;
        vm.user = "";
        vm.tasks = [];
        getTasks($http)
            .then((userTasks) => {
                vm.tasks = userTasks;
            });
    }

    function getTasks($http) {
        return $http.get('/api/tasks')
            .then((response) => {
                return response.data;
            }, (error) => {
                console.log('Error >>>: ' + error)
            })
    }


}())