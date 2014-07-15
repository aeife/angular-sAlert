angular.module('app', [
        'sAlert',
        'simpleAlerts',
        'autoRemoveAlerts',
        'promiseAlerts',
        'alertConfiguration',
        'alertInstances',
        'angularSmoothscroll'
    ])
    .config(function ($interpolateProvider) {
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    });