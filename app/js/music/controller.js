define(['angular','config','IScroll'],function(angular,Config,IScroll){
	
	'use strict';
	
	var module = angular.module('music.controller',['Config']);

	// music controller
	module.controller('musicController',['$rootScope','$scope','Config','$http',function($rootScope,$scope,Config,$http){
	  console.log('musicController');
	 

	}]);

	
});