angular.module('autoRemoveAlerts', [])
    .controller('autoRemoveAlertsCtrl', function ($scope, sAlert) {
        $scope.successAlertMsg = 'my success message';
        $scope.infoAlertMsg = 'my info message';
        $scope.errorAlertMsg = 'my error message';

        $scope.addSuccessAndAutoRemove = function () {
            sAlert.success($scope.successAlertMsg).autoRemove();
        }

        $scope.addInfoAndAutoRemove = function () {
            sAlert.info($scope.infoAlertMsg).autoRemove();
        }

        $scope.addErrorAndAutoRemove = function () {
            sAlert.error($scope.errorAlertMsg).autoRemove();
        }
    });