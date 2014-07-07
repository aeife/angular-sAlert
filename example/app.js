angular.module('myApp', ['alert'])
    .controller('mainCtrl', function ($scope, alert, $q, $timeout) {
        // alert.info('sAlert info');
        // alert.error('sAlert error');
        // alert.success('sAlert success');
        // alert.info('sAlert autoRemove').autoRemove();

        // var deferred = $q.defer();
        // alert.info('sAlert remove on promise').removeOnResolve(deferred.promise);

        // $timeout(function () {
        //     deferred.resolve();
        // }, 3000);

        $scope.addSuccess = function () {
            alert.success('sAlert success');
        }

        $scope.addInfo = function () {
            alert.info('sAlert info');
        }

        $scope.addError = function () {
            alert.error('sAlert error');
        }

        $scope.addSuccessAndAutoRemove = function () {
            alert.success('sAlert success, auto remove').autoRemove();
        }

        $scope.addInfoAndAutoRemove = function () {
            alert.info('sAlert info, auto remove').autoRemove();
        }

        $scope.addErrorAndAutoRemove = function () {
            alert.error('sAlert error, auto remove').autoRemove();
        }

        

        $scope.deferred = $q.defer();

        $scope.resolvePromise = function () {
            $scope.deferred.resolve();
            $scope.deferred = $q.defer();
        }

        $scope.addSuccessAndRemoveOnPromise = function () {
            alert.success('sAlert success, remove on promise finish').removeOnResolve($scope.deferred.promise);
        }

        $scope.addInfoAndRemoveOnPromise = function () {
            alert.info('sAlert info, remove on promise finish').removeOnResolve($scope.deferred.promise);
        }

        $scope.addErrorAndRemoveOnPromise = function () {
            alert.error('sAlert error, remove on promise finish').removeOnResolve($scope.deferred.promise);
        }
    });