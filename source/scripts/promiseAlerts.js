angular.module('promiseAlerts', [])
    .controller('promiseAlertsCtrl', function ($scope, $q, sAlert) {
        $scope.deferred = $q.defer();

        $scope.resolvePromise = function () {
            $scope.deferred.resolve();
            $scope.deferred = $q.defer();
        }

        $scope.addSuccessAndRemoveOnPromise = function () {
            sAlert.success('sAlert success, waiting for promise...').removeOnResolve($scope.deferred.promise);
        }

        $scope.addInfoAndRemoveOnPromise = function () {
            sAlert.info('sAlert info, waiting for promise...').removeOnResolve($scope.deferred.promise);
        }

        $scope.addErrorAndRemoveOnPromise = function () {
            sAlert.error('sAlert error, waiting for promise...').removeOnResolve($scope.deferred.promise);
        }
    });