(function () {
    var componentApp = angular.module('componentApp')

        .component('dashboard', {
            templateUrl: "../../../html/templates/dashboard.html",
            controller: ['$http', '$element', dashController],
            controllerAs: 'vm'
        });

    function dashController($http, $element) {
        var vm = this;

        vm.check = (value)=>{
            console.log('LLEGÓ EN: '+value)
            vm.checked = value;
        }

        vm.addTask = () => {
            var method = "POST",
                url = "/api/tasks/new";
                params = {
                    title: $element.find('#task_entry').val()
                }

            $http.post(url, params)
                .success((data, status) => {
                    console.log('data: '+data);
                    console.log('status: '+status);
                    $element.find('#task_entry').val("");
                })
                .error((error) => {
                    console.log('Error >>>: ' + error)
                })
        }
    }
}())