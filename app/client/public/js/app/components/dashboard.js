(function () {
    var componentApp = angular.module('componentApp')

        .component('dashboard', {
            templateUrl: "../../../html/templates/dashboard.html",
            controller: ['$http', dashController],
            controllerAs: 'vm'
        });

    function dashController($http, $element) {
        var vm = this;

        /*vm.check = (value)=>{
            vm.checked = value;
        }

        vm.addTask = () => {
            var method = "POST",
                url = "/api/tasks/new";
                params = {
                    title: $element.find('#task_entry').val()
                }
                //$timer.timeStart= new Date(); //Starting task chronometer
            $http.post(url, params)
                .success((data) => {
                    console.log('data: '+data);
                    $element.find('#task_entry').val("");
                })
                .error((error) => {
                    console.log('Error >>>: ' + error)
                })
        }*/
    }
}())