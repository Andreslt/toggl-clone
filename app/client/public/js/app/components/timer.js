(function () {
    var componentApp = angular.module('componentApp')

        .component('timer', {
            templateUrl: "../../../html/templates/timer.html",
            controller: ['$timeout', '$http', '$element', '$window', timerController],
            controllerAs: 'vm',
        });

    function timerController($timeout, $http, $element, $window) {
        var vm = this;
        var timeSchedule = {
            summary: []
        };
        var timeStart = 0, timeEnd = 0, myTimeout;
        vm.timer = "00:00:00";

        vm.check = (value) => {
            vm.mode = 'Stop'
            vm.timeStart = new Date();
            vm.toggleTimer();
            vm.running = value
            vm.checked = value;
        }

        vm.toggleTimer = () => {
            if (vm.timer === "00:00:00") {
                startTimer();
            } else {
                if (vm.mode === 'Start') {
                    vm.mode = "Start";
                    startTimer();
                } else {
                    vm.mode = "Stop";
                    stopTimer();
                    vm.stopped = true
                }
            }
        }

        vm.reset = () => {
            $window.location.reload();
        }

        vm.addTask = () => {
            var method = "POST",
                url = "/api/tasks/new";
            params = {
                title: $element.find('#task_entry').val(),
                summary: timeSchedule.summary
            }
            $http.post(url, params)
                .success((data) => {
                    $element.find('#task_entry').val("");
                    $window.location.reload();
                })
                .error((error) => {
                    console.log('Error >>>: ' + error)
                })
        }

        function getCurrentTime() {
            return (new Date()).getTime();
        }

        function startTimer() {
            var h, m, s, ms, timeEnd = getCurrentTime();
            ms = Math.floor((getCurrentTime() - vm.timeStart) / 1000);
            h = checkTime(Math.floor(ms / 3600));
            ms = Math.floor(ms % 3600);
            m = checkTime(Math.floor(ms / 60));
            ms = Math.floor(ms % 60);
            s = checkTime(Math.floor(ms));
            vm.timer = h + ":" + m + ":" + s;
            myTimeout = $timeout(function () {
                startTimer();
            }, 500);
        };

        function stopTimer() {
            $timeout.cancel(myTimeout);

            // add to history
            timeSchedule.summary =
                {
                    started_at: formatDate(new Date(vm.timeStart)),
                    finished_at: formatDate(new Date(getCurrentTime())),
                    duration: (getCurrentTime() - vm.timeStart) / 1000
                };
            console.log('summary: ' + JSON.stringify(timeSchedule.summary));
        }

        function checkTime(i) {
            i = (i < 1) ? 0 : i;
            if (i < 10) { i = "0" + i; }  // add zero in front of numbers < 10
            return i;
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
            var seconds = date.getSeconds();

            return day + '/' + monthNames[monthIndex] + '/' + year + ' ' + correctTime(hours) + ':' + correctTime(minutes) + ':' + correctTime(seconds);
        }

        function correctTime(time) {
            if (time < 10)
                time = '0' + time
            return time
        }

    }
}())