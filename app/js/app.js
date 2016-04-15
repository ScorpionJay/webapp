define(['angular','route','IScroll'],function(angular,router,IScroll){

	var myApp = angular.module('app', ['ui.router']);

	myApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
		// For any unmatched url, redirect to /state1
		$urlRouterProvider.otherwise("/book");
		// Now set up the states
		$stateProvider
		  .state('book', {
			url: "/book",
			views:{
			  header:{templateUrl:'view/header.html'},
			  container:{
				templateUrl:'view/bookList.html',
				controller:'bookController',
				reloadOnSearch: false
			  },
			  footer:{templateUrl:'view/footer.html'}
			}
		  })
		  .state('bookDetail', {
			url: "/books/:id",
			views:{
			  header:{templateUrl:'view/headerBack.html'},
			  container:{
				templateUrl:'view/bookDetail.html',
				controller:'bookDetailController'
			  },
			  footer:{templateUrl:'view/footer.html'}
			}
		  })
		  .state('movice', {
			url: "/movice",
			views:{
			  header:{templateUrl:'view/header.html'},
			  container:{
				templateUrl:'view/moviceList.html',
				controller:'moviceController'
			  },
			  footer:{templateUrl:'view/footer.html'}
			}
		  })
		  .state('music', {
			url: "/music",
			views:{
			  header:{templateUrl:''},
			  container:{
				templateUrl:'view/musicList.html',
				controller:'musicController'
			  },
			  footer:{templateUrl:'view/footer.html'}
			}
		  });

	}]);

	// Constant
	myApp.constant('Config', {
	  book_search: 'https://api.douban.com/v2/book/search',
	  book_search_id: 'https://api.douban.com/v2/book/',
	  music_search: 'https://api.douban.com/v2/music/search',
	  music_search_id: 'https://api.douban.com/v2/music/',
	  movie_search: 'https://api.douban.com/v2/movie/search',
	  movie_search_id: 'https://api.douban.com/v2/movie/subject/'
	});

	myApp.run(['$rootScope', '$state', '$stateParams',function($rootScope, $state, $stateParams) {
				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams;
				$rootScope.$on("$stateChangeSuccess",  function(event, toState, toParams, fromState, fromParams) {
					// to be used for back button //won't work when page is reloaded.
					$rootScope.previousState_name = fromState.name;
					$rootScope.previousState_params = fromParams;
				});
				//back button function called from back button's ng-click="back()"
				$rootScope.back = function() {
					$state.go($rootScope.previousState_name,$rootScope.previousState_params);
				};
			}]);

	// book controller
	myApp.controller('bookController',['$rootScope','$scope','Config','$http',function($rootScope,$scope,Config,$http){
	  console.log('bookController');
	  console.log(Config.book_search);
	  var keywords = 'angular';
	  $http.jsonp(Config.book_search + '?callback=searchBookList&count=10&q=' + keywords);
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
			$rootScope.bookList = list;
			console.log($rootScope.bookList);

			var wrapper = document.getElementById('wrapper');
			console.log(wrapper);
    		var myScroll = new IScroll(wrapper);
	  };

	  $scope.search = function(){
	  	if($scope.keyword == '' || $scope.keyword == undefined){
	  		$rootScope.bookList = {};
	  	}else{
			$http.jsonp(Config.book_search + '?callback=searchBookList&count=10&q=' + $scope.keyword);
	  	}
	  };

	}]);

	// book detail controller
	myApp.controller('bookDetailController',['$scope','Config','$http','$stateParams',function($scope,Config,$http,$stateParams){
	  console.log($stateParams.id);
	  $http.jsonp( Config.book_search_id + $stateParams.id +'?callback=callback_bookDetail&' );
	  window.callback_bookDetail = function(data){
		console.log(data);
		$scope.data = data;
	  };

	}]);

	myApp.controller('moviceController',function(){
	  console.log('moviceController');
	});

	myApp.controller('musicController',function(){
	  console.log('musicController');
	});


});