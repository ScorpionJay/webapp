define(['angular','config','IScroll','service'],function(angular,Config,IScroll){
	
	'use strict';
	
	var module = angular.module('book.controller',['Config','app.service']);

	// book controller
	module.controller('bookController',['$rootScope','$scope','Config','$http','HttpService',function($rootScope,$scope,Config,$http,HttpService){
	  console.log('bookController');

	   $scope.pageClass = 'page-home';

	  console.log(Config.book_search);
	  $scope.keyword = '谁的青春不迷茫';
	  //$http.jsonp(Config.book_search + '?callback=searchBookList&count=10&q=' + keywords);
	  //HttpService.querywithParams(Config.book_search + '?callback=searchBookList&count=10&q=' + $scope.keyword);
	  window.searchBookList = function(data){
			console.log(data);
			if(data.books.length){
			  $rootScope.isNoLoaded = false;
			}
			var list = [];
			for(var i = 0; i < data.books.length; i++){
			  var book = data.books[i];
			  var item = {
				id: book.id,
				image: book.image,
				origin_title: book.title || '书名未共享',
				author: book.author[0] || '作者未知',
				publisher: book.publisher || '出版社未知',
				price: book.price.split('.')[0] || '未知',
				pages: book.pages
			  };
			  list.push(item);
			}
			$scope.data = list;

			var wrapper = document.getElementById('wrapper');
			console.log(wrapper);
    		var myScroll = new IScroll(wrapper,{click:true ,mouseWheel: true,dataset:  $scope.search ,cacheSize: 1000});
    		// http://lab.cubiq.org/iscroll5/demos/infinite/ 
    		setTimeout(function () {
			        myScroll.refresh();
			    }, 0);
    		myScroll.on('scrollEnd', function(){
    			console.log('end scroll...');

    			if(this.y === 0){
    				//$('#msg').modal();
    			}else if(this.y === 100){

    			}
    			//myScroll.destroy();
    			setTimeout(function () {
			        myScroll.refresh();
			    }, 0);
    		});
    		myScroll.on('scrollStart',function(){
    			console.log('start scroll...');
    		});
	  };
		// $scope.data = [];
		//   for (var i = 0; i < 10; i++) {
		//   	$scope.data.push({id:i,name:'jay' + i});
		//   };
	  $scope.search = function(){
	  	if($scope.keyword == '' || $scope.keyword == undefined){
	  		$rootScope.bookList = {};
	  	}else{
			//$http.jsonp(Config.book_search + '?callback=searchBookList&count=10&q=' + $scope.keyword);
			HttpService.querywithParams(Config.book_search + '?callback=searchBookList&count=10&q=' + $scope.keyword);
	  	};


		// function requestData (start, count) {
		// 	ajax('dataset.php?start=' + +start + '&count=' + +count, {
		// 		callback: function (data) {
		// 			data = JSON.parse(data);
		// 			myScroll.updateCache(start, data);
		// 		}
		// 	});
		// }

	  };

	  $scope.search();

	}]);


	// book detail controller
	module.controller('bookDetailController',['$scope','Config','$http','$stateParams',function($scope,Config,$http,$stateParams){
	  $scope.pageClass = 'page-about';
	  console.log($stateParams.id);
	  $http.jsonp( Config.book_search_id + $stateParams.id +'?callback=callback_bookDetail&' );
	  window.callback_bookDetail = function(data){
		console.log(data);
		$scope.data = data;
		var wrapper = document.getElementById('wrapper');
		console.log(wrapper);
    	var myScroll = new IScroll(wrapper);
    	setTimeout(function () {
			        myScroll.refresh();
			    }, 0);
	  };

	}]);
	
});