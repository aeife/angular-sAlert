angular.module('alertConfiguration', [])
    .controller('alertConfigurationCtrl', function ($scope, sAlert) {
        $scope.myAlertOptions = {
            container: true,
            fixedOnTop: true
        };

        $scope.addSuccess = function () {
            sAlert.success('my success message');
        }

        $scope.addInfo = function () {
            sAlert.info('my info message');
        }

        $scope.addError = function () {
            sAlert.error('my error message');
        }
    });