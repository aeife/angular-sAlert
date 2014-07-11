'use strict';

angular.module('sAlert', [])
    .service('sAlert', ['$rootScope', '$timeout', function ($rootScope, $timeout) {

        var messages = {};
        var idCounter = 0;

        // remove messages on route change
        $rootScope.$on('$routeChangeSuccess', function() {
            sAlert.clear();
        });
        var sAlert =  {
            defaultInstance: 'defaultSAlertInstance',
            clear: function(){
                messages = {};
            },
            get: function() {
                return messages;
            },
            addMsg: function (message, type, instance) {

                if (!instance) {
                    instance = this.defaultInstance;
                }

                var id = idCounter;
                idCounter++;
                messages[id] = {
                    instance: instance,
                    id: id,
                    msg: message,
                    type: type,
                    autoRemove: false
                };
                return {
                    autoRemove: function () {
                        messages[id].autoRemove = true;
                        $timeout(function () {
                            sAlert.remove(id);
                        }, 2000);
                    },
                    removeOnResolve: function (promise) {
                        messages[id].autoRemove = true;
                        promise.then(function () {
                            sAlert.remove(id);
                        }, function () {
                            sAlert.remove(id);
                        });
                    }
                };
            },
            success: function (message, instance) {
                return this.addMsg(message, 'success', instance);
            },
            info: function(message, instance){
                return this.addMsg(message, 'info', instance);
            },
            error: function(message, instance){
                return this.addMsg(message, 'danger', instance);
            },
            remove: function(id){
                delete messages[id];
            }
        };

        return sAlert;
    }])
    .controller('sAlertCtrl', ['$scope', 'sAlert', function ($scope, sAlert) {
        $scope.sAlert = sAlert;

        if (!$scope.instance) {
            $scope.alertInstance = sAlert.defaultInstance;
        } else {
            $scope.alertInstance = $scope.instance;
        }

        $scope.opts = {
            fixedOnTop: true,
            container: false
        };

        $scope.opts = angular.extend({}, $scope.opts, $scope.$eval($scope.options));
    }])
    .directive('sAlert', function () {
        return {
            restrict: 'E',
            templateUrl: 'sAlert.html',
            scope: {
                options: '@',
                instance: '@'
            },
            controller: 'sAlertCtrl'
        };
    });