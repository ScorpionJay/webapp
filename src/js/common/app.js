define(['angular','route','home/homeController'
	,'accout/accoutController'
	,'login/controller','common/service'],function(){

	console.log('app');

	var app = angular.module('app',['ngRoute',
		'homeModule',
		'accoutModule','loginModule','serviceModule']);

	app.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider){

		$routeProvider
			.when('/home',{
				templateUrl:'js/home/home.html',
				controller:'homeCtr'
			})
			.when('/accout',{
				templateUrl:'js/accout/accout.html',
				controller:'accoutCtr'
			})
			.when('/login',{
				templateUrl:'js/login/index.html',
				controller:'loginCtr'
			})
			.otherwise('/home');

        $locationProvider.html5Mode({
			  enabled: false,
			  requireBase: false
			});
	}]);


});