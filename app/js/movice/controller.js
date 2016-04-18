define(['angular','config','IScroll','common/service'],function(angular,Config,IScroll){
	
	'use strict';
	
	var module = angular.module('movice.controller',['Config','app.service']);

	// movice controller
	module.controller('moviceController',['$rootScope','$scope','Config','$http','HttpService',function($rootScope,$scope,Config,$http,HttpService){
	  	console.log('moviceController');


	  	$scope.keyword = '速度与激情';
		//$http.jsonp(Config.book_search + '?callback=searchBookList&count=10&q=' + keywords);
		HttpService.querywithParams(Config.movie_search + '?callback=searchBookList&count=10&q=' + $scope.keyword);
		window.searchBookList = function(data){
			console.log(data);
			$scope.data = data;

			var wrapper = document.getElementById('wrapper');
			console.log(wrapper);
			var myScroll = new IScroll(wrapper);
		};
		$scope.data = [];
		  for (var i = 0; i < 10; i++) {
		  	$scope.data.push({id:i,name:'jay' + i});
		  };
		$scope.search = function(){
			if($scope.keyword == '' || $scope.keyword == undefined){
				$rootScope.bookList = {};
			}else{
			//$http.jsonp(Config.book_search + '?callback=searchBookList&count=10&q=' + $scope.keyword);
			HttpService.querywithParams(Config.movie_search + '?callback=searchBookList&count=10&q=' + $scope.keyword);
			}
		};
		
	}]);

	
});