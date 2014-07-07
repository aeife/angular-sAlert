angular.module('myApp', ['sAlert'])
    .controller('mainCtrl', function ($scope, sAlert, $q, $timeout) {
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
            sAlert.success('sAlert success');
        }

        $scope.addInfo = function () {
            console.log("info");
            sAlert.info('sAlert info');
        }

        $scope.addError = function () {
            sAlert.error('sAlert error');
        }

        $scope.addSuccessAndAutoRemove = function () {
            sAlert.success('sAlert success, auto remove').autoRemove();
        }

        $scope.addInfoAndAutoRemove = function () {
            sAlert.info('sAlert info, auto remove').autoRemove();
        }

        $scope.addErrorAndAutoRemove = function () {
            sAlert.error('sAlert error, auto remove').autoRemove();
        }

        

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
    });