'use strict';

describe('alert', function () {
    var alert;
    var rootScope;
    var scope;
    var controller;
    var $timeout;
    var $q;
    
    beforeEach(module('alert'));

    beforeEach(inject(function (_alert_, _$rootScope_, _$controller_, _$timeout_, _$q_) {
        alert = _alert_;
        rootScope = _$rootScope_;
        scope = _$rootScope_.$new();
        controller = _$controller_('alertboxCtrl', {
            $scope: scope,
            alert: alert
        });
        $timeout = _$timeout_;
        $q = _$q_;
    }));

    describe('declaration', function () {
        it('should set correct message text', function () {
            alert.error('generic error');

            expect(alert.get()[0].msg).toBe('generic error');
        });

        it('should set id', function () {
            alert.error('generic error');

            expect(alert.get()[0].id).toBe(0);
        });

        it('should auto increment id', function () {
            alert.error('generic error');
            alert.error('generic error');
            alert.error('generic error');

            expect(alert.get()[2].id).toBe(2);
        });

        it('should set correct message type for error', function () {
            alert.error('generic error');

            expect(alert.get()[0].type).toBe('danger');
        });

        it('should set correct message type for info', function () {
            alert.info('generic info');

            expect(alert.get()[0].type).toBe('info');
        });
    });

    describe('add messages', function () {
        it('should save added messages', function () {
            alert.error('generic error');
            alert.info('generic info');

            expect(Object.keys(alert.get()).length).toBe(2);
        });
    });

    describe('remove messages', function () {
        it('should delete the second messages', function () {
            alert.error('generic error');
            alert.info('generic info');
            alert.error('generic error2');
            alert.remove(1);

            var messages = alert.get();
            expect(messages[0]).toBeDefined();
            expect(messages[1]).not.toBeDefined();
            expect(messages[2]).toBeDefined();
        });

        it('should empty msg array on clear', function () {
            alert.error('generic error');
            alert.info('generic info');
            alert.error('generic error2');
            alert.clear();

            expect(Object.keys(alert.get()).length).toBe(0);
        });

        it('should clear messages on route change', function () {
            alert.error('generic error');
            alert.info('generic info');
            alert.error('generic error2');
            rootScope.$emit('$routeChangeSuccess');
            rootScope.$digest();

            expect(Object.keys(alert.get()).length).toBe(0);
        });
    });

    describe('autoRemove', function () {
        it('should add autoRemove attribute to each message', function () {
            alert.error('generic error');

            expect(alert.get()[0].autoRemove).toBeDefined();
        });

        it('should default autoRemove to false', function () {
            alert.error('generic error');

            expect(alert.get()[0].autoRemove).toBe(false);
        });

        it('should present a function for autoRemove', function () {
            expect(alert.error('generic error').autoRemove).toBeDefined();
        });

        describe('autoRemove function', function () {
            it('should set autoRemove attribute to true', function () {
                alert.error('generic error').autoRemove();

                expect(alert.get()[0].autoRemove).toBe(true);
            });

            it('should remove specified alert after set time', function () {
                alert.error('generic error').autoRemove();
                $timeout.flush();

                expect(Object.keys(alert.get()).length).toBe(0);
            });
        });

        describe('removeOnResolve function', function () {
            it('should present a function for autoRemoveOnResolve', function () {
                expect(alert.info('generic info').removeOnResolve).toBeDefined();
            });

            it('should remove specified alert after promise resolved', function () {
                var deferred = $q.defer();

                alert.info('generic info').removeOnResolve(deferred.promise);
                deferred.resolve();
                $timeout.flush();

                expect(Object.keys(alert.get()).length).toBe(0);
            });

            it('should remove specified alert after promise reject', function () {
                var deferred = $q.defer();

                alert.info('generic info').removeOnResolve(deferred.promise);
                deferred.reject();
                $timeout.flush();

                expect(Object.keys(alert.get()).length).toBe(0);
            });
        });
    });



    describe('controller', function () {
        it('should pass alert to directive scope', function () {
            expect(scope.alert).toBe(alert);
        });
    });
});