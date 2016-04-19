define(['angular','config','IScroll','service'],function(angular,Config,IScroll){
	
	'use strict';
	
	var module = angular.module('movice.controller',['Config','app.service']);

	// movice controller
	module.controller('moviceController',['$rootScope','$scope','Config','$http','HttpService',function($rootScope,$scope,Config,$http,HttpService){
	  	console.log('moviceController');

	  	 $scope.pageClass = 'page-about';

		window.searchBookList = function(data){
			console.log(data);
			$scope.data = data;
			var wrapper = document.getElementById('wrapper');

			var myScroll = new IScroll(wrapper,{click:true});
			setTimeout(function () {
			        myScroll.refresh();
			    }, 0);
		};

		$scope.search = function(){
			if($scope.keyword == '' || $scope.keyword == undefined){
				$rootScope.data = {};
			}else{
			//$http.jsonp(Config.book_search + '?callback=searchBookList&count=10&q=' + $scope.keyword);
			HttpService.querywithParams(Config.movie_search + '?callback=searchBookList&count='+ Config.count +'&q=' + $scope.keyword);
			}
		};

		$scope.keyword = '速度与激情';
		$scope.search();

	}]);

	
});