angular.module('myApp', ['alert'])
    .controller('mainCtrl', function ($scope, alert, $q, $timeout) {
        alert.info('sAlert info');
        alert.error('sAlert error');
        alert.success('sAlert success');
        alert.info('sAlert autoRemove').autoRemove();

        var deferred = $q.defer();
        alert.info('sAlert remove on promise').removeOnResolve(deferred.promise);

        $timeout(function () {
            deferred.resolve();
        }, 3000);
    });