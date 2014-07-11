'use strict';

describe('sAlert', function () {
    var sAlert;
    var rootScope;
    var scope;
    var controller;
    var $timeout;
    var $q;
    
    beforeEach(module('sAlert'));

    beforeEach(inject(function (_sAlert_, _$rootScope_, _$controller_, _$timeout_, _$q_) {
        sAlert = _sAlert_;
        rootScope = _$rootScope_;
        scope = _$rootScope_.$new();
        controller = _$controller_('sAlertCtrl', {
            $scope: scope,
            sAlert: sAlert
        });
        $timeout = _$timeout_;
        $q = _$q_;
    }));

    describe('declaration', function () {
        it('should set correct message text', function () {
            sAlert.error('generic error');

            expect(sAlert.get()[0].msg).toBe('generic error');
        });

        it('should set id', function () {
            sAlert.error('generic error');

            expect(sAlert.get()[0].id).toBe(0);
        });

        it('should auto increment id', function () {
            sAlert.error('generic error');
            sAlert.error('generic error');
            sAlert.error('generic error');

            expect(sAlert.get()[2].id).toBe(2);
        });

        it('should set correct message type for error', function () {
            sAlert.error('generic error');

            expect(sAlert.get()[0].type).toBe('danger');
        });

        it('should set correct message type for info', function () {
            sAlert.info('generic info');

            expect(sAlert.get()[0].type).toBe('info');
        });
    });

    describe('add messages', function () {
        it('should save added messages', function () {
            sAlert.error('generic error');
            sAlert.info('generic info');

            expect(Object.keys(sAlert.get()).length).toBe(2);
        });
    });

    describe('remove messages', function () {
        it('should delete the second messages', function () {
            sAlert.error('generic error');
            sAlert.info('generic info');
            sAlert.error('generic error2');
            sAlert.remove(1);

            var messages = sAlert.get();
            expect(messages[0]).toBeDefined();
            expect(messages[1]).not.toBeDefined();
            expect(messages[2]).toBeDefined();
        });

        it('should empty msg array on clear', function () {
            sAlert.error('generic error');
            sAlert.info('generic info');
            sAlert.error('generic error2');
            sAlert.clear();

            expect(Object.keys(sAlert.get()).length).toBe(0);
        });

        it('should clear messages on route change', function () {
            sAlert.error('generic error');
            sAlert.info('generic info');
            sAlert.error('generic error2');
            rootScope.$emit('$routeChangeSuccess');
            rootScope.$digest();

            expect(Object.keys(sAlert.get()).length).toBe(0);
        });
    });

    describe('autoRemove', function () {
        it('should add autoRemove attribute to each message', function () {
            sAlert.error('generic error');

            expect(sAlert.get()[0].autoRemove).toBeDefined();
        });

        it('should default autoRemove to false', function () {
            sAlert.error('generic error');

            expect(sAlert.get()[0].autoRemove).toBe(false);
        });

        it('should present a function for autoRemove', function () {
            expect(sAlert.error('generic error').autoRemove).toBeDefined();
        });

        describe('autoRemove function', function () {
            it('should set autoRemove attribute to true', function () {
                sAlert.error('generic error').autoRemove();

                expect(sAlert.get()[0].autoRemove).toBe(true);
            });

            it('should remove specified sAlert after set time', function () {
                sAlert.error('generic error').autoRemove();
                $timeout.flush();

                expect(Object.keys(sAlert.get()).length).toBe(0);
            });
        });

        describe('removeOnResolve function', function () {
            it('should present a function for autoRemoveOnResolve', function () {
                expect(sAlert.info('generic info').removeOnResolve).toBeDefined();
            });

            it('should remove specified sAlert after promise resolved', function () {
                var deferred = $q.defer();

                sAlert.info('generic info').removeOnResolve(deferred.promise);
                deferred.resolve();
                $timeout.flush();

                expect(Object.keys(sAlert.get()).length).toBe(0);
            });

            it('should remove specified sAlert after promise reject', function () {
                var deferred = $q.defer();

                sAlert.info('generic info').removeOnResolve(deferred.promise);
                deferred.reject();
                $timeout.flush();

                expect(Object.keys(sAlert.get()).length).toBe(0);
            });
        });
    });

    describe('instances', function () {
        it('should define default instance if no instance is stated', function () {
            sAlert.info('generic info');

            expect(sAlert.get()[0].instance).toBe(sAlert.defaultInstance);
        });

        it('should set defined instance', function () {
            sAlert.info('generic info', "myTestInstance");

            expect(sAlert.get()[0].instance).toBe('myTestInstance');
        });
    });

    describe('controller', function () {
        it('should pass sAlert to directive scope', function () {
            expect(scope.sAlert).toBe(sAlert);
        });

        describe('options', function () {
            it('should set default options', function () {
                expect(scope.opts.fixedOnTop).toBeDefined();
                expect(scope.opts.container).toBeDefined();
            });

            it('should allow changes to options', function () {
                scope.options = '{fixedOnTop: false}';
                inject(function (_$controller_) {
                    controller = _$controller_('sAlertCtrl', {
                        $scope: scope,
                        sAlert: sAlert
                    });
                });
                expect(scope.opts).toEqual({fixedOnTop: false, container: false});

                scope.options = '{container: true}';
                inject(function (_$controller_) {
                    controller = _$controller_('sAlertCtrl', {
                        $scope: scope,
                        sAlert: sAlert
                    });
                });
                expect(scope.opts).toEqual({fixedOnTop: true, container: true});
            });
        });
    });
});