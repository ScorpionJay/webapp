define(['angular','route','animate','js/book/controller','js/movice/controller','js/music/controller','service','fillter'],function(){

	var app = angular.module('App', ['ui.router','ngAnimate','book.controller','movice.controller','music.controller','app.service','app.fillter']);

	app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/book");
		$stateProvider
		  .state('book', {
			url: "/book",
			views:{
			  header:{templateUrl:'js/view/header.html'},
			  container:{
				templateUrl:'js/book/bookList.html',
				 controller:'bookController',
				reloadOnSearch: false
			  },
			  footer:{templateUrl:'js/view/footer.html'}
			}
		  })
		  .state('bookDetail', {
			url: "/books/:id",
			views:{
			  header:{templateUrl:'js/view/headerBack.html'},
			  container:{
				templateUrl:'js/book/bookDetail.html',
				controller:'bookDetailController'
			  },
			  footer:{templateUrl:'js/view/footer.html'}
			}
		  })
		  .state('movice', {
			url: "/movice",
			views:{
			  header:{templateUrl:'js/view/header.html'},
			  container:{
				templateUrl:'js/movice/moviceList.html',
				controller:'moviceController'
			  },
			  footer:{templateUrl:'js/view/footer.html'}
			}
		  })
		  .state('music', {
			url: "/music",
			views:{
			  header:{templateUrl:'js/view/header.html'},
			  container:{
				templateUrl:'js/music/musicList.html',
				controller:'musicController'
			  },
			  footer:{templateUrl:'js/view/footer.html'}
			}
		  });

	}]);

	app.run(['$rootScope', '$state', '$stateParams',function($rootScope, $state, $stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
		$rootScope.tab = [true,false,false];
		$rootScope.$on("$stateChangeSuccess",  function(event, toState, toParams, fromState, fromParams) {
			// to be used for back button //won't work when page is reloaded.
			$rootScope.previousState_name = fromState.name;
			$rootScope.previousState_params = fromParams;

			console.log(toState);
			$rootScope.tab = [false,false,false];
			switch(toState.name){
			case 'book':
			case 'bookDetail':
				$rootScope.tab[0] = true;
				$rootScope.tabName = 'Book';
				break;
			case 'movice':
				$rootScope.tab[1] = true;
				$rootScope.tabName = 'Movic';
				break;
			case 'music':
				$rootScope.tab[2] = true;
				$rootScope.tabName = 'Music';
				break;
			};

		});
		//back button function called from back button's ng-click="back()"
		$rootScope.back = function() {
			$state.go($rootScope.previousState_name,$rootScope.previousState_params);
		};
	}]);


});