define(['angular','config','IScroll','common/service'],function(angular,Config,IScroll){
	
	'use strict';
	
	var module = angular.module('movice.controller',['Config','app.service']);

	// movice controller
	module.controller('moviceController',['$rootScope','$scope','Config','$http','HttpService',function($rootScope,$scope,Config,$http,HttpService){
	  	console.log('moviceController');


	  	$scope.keyword = '谁的青春不迷茫';
		//$http.jsonp(Config.book_search + '?callback=searchBookList&count=10&q=' + keywords);
		HttpService.querywithParams(Config.movie_search + '?callback=searchBookList&count=10&q=' + $scope.keyword);
		window.searchBookList = function(data){
			console.log(data);
			// if(data.books.length){
			//   $rootScope.isNoLoaded = false;
			// }
			// var list = [];
			// for(var i = 0; i < data.books.length; i++){
			//   var book = data.books[i];
			//   var item = {
			// 	id: book.id,
			// 	image: book.image,
			// 	origin_title: book.title || '书名未共享',
			// 	author: book.author[0] || '作者未知',
			// 	publisher: book.publisher || '出版社未知',
			// 	price: book.price.split('.')[0] || '未知',
			// 	pages: book.pages
			//   };
			//   list.push(item);
			// }
			 $scope.data = data;

			// //console.log($rootScope.bookList);

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