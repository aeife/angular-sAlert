angular.module('alertInstances', [])
    .controller('alertInstancesCtrl', function ($scope, sAlert) {
        $scope.addSuccess = function (instance) {
            sAlert.success('my success message', instance);
        }

        $scope.addInfo = function (instance) {
            sAlert.info('my info message', instance);
        }

        $scope.addError = function (instance) {
            sAlert.error('my error message', instance);
        }
    });