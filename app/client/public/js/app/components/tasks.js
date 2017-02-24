(function () {
    var componentApp = angular.module('componentApp')

        .component('tasks', {
            templateUrl: "../../../html/templates/tasks.html",
            controller: ['$http', taskController],
            controllerAs: 'vm',
        });

    function taskController($http) {
        var vm = this;
        vm.user = "";
        vm.tasks = [];

        getUser($http)
            .then((user) => {
                vm.user = user;
            });
        getTasks($http)
            .then((userTasks) => {
                vm.tasks = userTasks;
            });

        vm.addTask = ($http) => {
            console.log('LLegó')
            return $http.post('/api/tasks/new')
                .then((response) => {
                    console.log('task: ' + response);
                }, (error) => {
                    console.log('Error >>>: ' + error)
                })
        }
    }

    function getTasks($http) {
        return $http.get('/api/tasks')
            .then((response) => {
                return response.data;
            }, (error) => {
                console.log('Error >>>: ' + error)
            })
    }

    function getUser($http) {
        return $http.get('/api/user')
            .then((response) => {
                return response.data;
            }, (error) => {
                console.log('Error >>>: ' + error)
            })
    }

}())