'use strict';

angular.module('alert', [])
    .service('alert', ['$rootScope', '$timeout', function ($rootScope, $timeout) {

        var messages = {};
        var idCounter = 0;

        // remove messages on route change
        $rootScope.$on('$routeChangeSuccess', function() {
            alert.clear();
        });

        var alert =  {
            clear: function(){
                messages = {};
            },
            get: function() {
                return messages;
            },
            addMsg: function (message, type) {
                var id = idCounter;
                idCounter++;
                messages[id] = {id: id, msg: message, type: type, autoRemove: false};
                return {
                    autoRemove: function () {
                        messages[id].autoRemove = true;
                        $timeout(function () {
                            alert.remove(id);
                        }, 2000);
                    },
                    removeOnResolve: function (promise) {
                        messages[id].autoRemove = true;
                        promise.then(function () {
                            alert.remove(id);
                        }, function () {
                            alert.remove(id);
                        });
                    }
                };
            },
            success: function (message) {
                return this.addMsg(message, 'success');
            },
            info: function(message){
                return this.addMsg(message, 'info');
            },
            error: function(message){
                return this.addMsg(message, 'danger');
            },
            remove: function(id){
                delete messages[id];
            }
        };

        return alert;
    }])
    .controller('alertboxCtrl', ['$scope', 'alert', function ($scope, alert) {
        $scope.alert = alert;
    }])
    .directive('alertbox', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/alert.html',
            controller: 'alertboxCtrl'
        };
    });