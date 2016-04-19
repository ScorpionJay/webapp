define(['angular','config','IScroll','service'],function(angular,Config,IScroll){
	
	'use strict';
	
	var module = angular.module('music.controller',['Config','app.service']);

	// music controller
	module.controller('musicController',['$rootScope','$scope','Config','$http','HttpService',function($rootScope,$scope,Config,$http,HttpService){
	 	console.log('musicController');

	 	$scope.pageClass = 'page-contact';

		window.musicList = function(data){
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
			HttpService.querywithParams(Config.music_search + '?callback=musicList&count='+ Config.count +'&q=' + $scope.keyword);
			}
		};

		$scope.keyword = 'see you again';
		$scope.search();

	}]);

	
});