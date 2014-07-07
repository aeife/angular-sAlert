/*!
 * @name        angular-salert
 * @author      André Eife <andre.eife@gmail.com>
 * @modified    Monday, July 7th, 2014
 * @version     0.1.0
 */"use strict";angular.module("sAlert",[]).service("sAlert",["$rootScope","$timeout",function(a,b){var c={},d=0;a.$on("$routeChangeSuccess",function(){e.clear()});var e={clear:function(){c={}},get:function(){return c},addMsg:function(a,f){var g=d;return d++,c[g]={id:g,msg:a,type:f,autoRemove:!1},{autoRemove:function(){c[g].autoRemove=!0,b(function(){e.remove(g)},2e3)},removeOnResolve:function(a){c[g].autoRemove=!0,a.then(function(){e.remove(g)},function(){e.remove(g)})}}},success:function(a){return this.addMsg(a,"success")},info:function(a){return this.addMsg(a,"info")},error:function(a){return this.addMsg(a,"danger")},remove:function(a){delete c[a]}};return e}]).controller("sAlertCtrl",["$scope","sAlert",function(a,b){a.sAlert=b}]).directive("sAlert",function(){return{restrict:"E",templateUrl:"sAlert.html",controller:"sAlertCtrl"}}),angular.module("sAlert").run(["$templateCache",function(a){a.put("sAlert.html",'<div class="sAlert navbar-fixed-top container alertbox">\n    <div ng-repeat="message in sAlert.get()" class="alert alert-{{message.type}}">\n        <button type="button" class="close" ng-if="!message.autoRemove" ng-click="sAlert.remove(message.id)">&times;</button>\n        {{message.msg}}\n    </div>\n</div>')}]);