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
                for(var i=0; i<userTasks.length; i++){                    
                    userTasks[i].fecha = moment((new Date(userTasks[i].created_at))).fromNow();
                }
                vm.task_list = userTasks;
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

    function getUser($http) {
        return $http.get('/api/user')
            .then((response) => {
                return response.data;
            }, (error) => {
                console.log('Error >>>: ' + error)
            })
    }

        function formatDate(date) {
            var monthNames = [
                "Jan", "Feb", "Mar",
                "Apr", "May", "Jun", "Jul",
                "Aug", "Sep", "Oct",
                "Nov", "Dec"
            ];

            var day = date.getDate();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();
            var hours = date.getHours();
            var minutes = date.getMinutes();

            return day + '/' + monthNames[monthIndex] + '/' + year + ' ' + correctTime(hours) + ':' + correctTime(minutes)
        }

        function correctTime(time) {
            if (time < 10)
                time = '0' + time
            return time
        }

}())