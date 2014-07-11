angular.module('myApp', ['sAlert'])
    .controller('mainCtrl', function ($scope, sAlert, $q, $timeout) {
        $scope.myAlertOptions = {
            fixedOnTop: false
        };

        /* simple alerts */

        $scope.addSuccess = function () {
            sAlert.success('sAlert success');
        }

        $scope.addInfo = function () {
            sAlert.info('sAlert info');
        }

        $scope.addError = function () {
            sAlert.error('sAlert error');
        }

        /* alerts with auto remove */

        $scope.addSuccessAndAutoRemove = function () {
            sAlert.success('sAlert success, auto remove').autoRemove();
        }

        $scope.addInfoAndAutoRemove = function () {
            sAlert.info('sAlert info, auto remove').autoRemove();
        }

        $scope.addErrorAndAutoRemove = function () {
            sAlert.error('sAlert error, auto remove').autoRemove();
        }

        /* alerts with promises */

        $scope.deferred = $q.defer();

        $scope.resolvePromise = function () {
            $scope.deferred.resolve();
            $scope.deferred = $q.defer();
        }

        $scope.addSuccessAndRemoveOnPromise = function () {
            sAlert.success('sAlert success, remove on promise finish').removeOnResolve($scope.deferred.promise);
        }

        $scope.addInfoAndRemoveOnPromise = function () {
            sAlert.info('sAlert info, remove on promise finish').removeOnResolve($scope.deferred.promise);
        }

        $scope.addErrorAndRemoveOnPromise = function () {
            sAlert.error('sAlert error, remove on promise finish').removeOnResolve($scope.deferred.promise);
        }


        $scope.addSuccessInInstance = function () {
            sAlert.success('sAlert success', 'localAlertInstance');
        }

        $scope.addInfoInInstance = function () {
            sAlert.info('sAlert info', 'localAlertInstance');
        }

        $scope.addErrorInInstance = function () {
            sAlert.error('sAlert error', 'localAlertInstance');
        }
    });