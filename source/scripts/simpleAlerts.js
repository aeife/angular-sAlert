angular.module('simpleAlerts', [])
    .controller('simpleAlertsCtrl', function ($scope, sAlert) {
        $scope.successAlertMsg = 'my success message';
        $scope.infoAlertMsg = 'my info message';
        $scope.errorAlertMsg = 'my error message';

        $scope.addSuccess = function () {
            sAlert.success($scope.successAlertMsg);
        }

        $scope.addInfo = function () {
            sAlert.info($scope.infoAlertMsg);
        }

        $scope.addError = function () {
            sAlert.error($scope.errorAlertMsg);
        }
    });