define(['angular','route'],function(){


	console.log('app');

	var app = angular.module('App',['ngRoute']);

	app.config(['$routeProvider',function($routeProvider){

		console.log($routeProvider);

		$routeProvider.when('/home',{
			templateUrl:'/home/home.html'
		});
	}]);


});