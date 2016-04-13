var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
// For any unmatched url, redirect to /state1
$urlRouterProvider.otherwise("/book");
// Now set up the states
$stateProvider
  .state('book', {
    url: "/book",
    views:{
      header:{templateUrl:'view/header.html'},
      container:{templateUrl:'book/container.html'},
      footer:{templateUrl:'view/footer.html'}
    }
  })
  .state('movice', {
    url: "/movice",
    views:{
      header:{templateUrl:'view/header.html'},
      container:{templateUrl:'movice/container.html'},
      footer:{templateUrl:'view/footer.html'}
    }
  })
  .state('music', {
    url: "/music",
    views:{
      header:{templateUrl:'view/header.html'},
      container:{templateUrl:'music/container.html'},
      footer:{templateUrl:'view/footer.html'}
    }
  });
});

// Constant
myApp.constant('ServiceConfig', {
  book_search: 'https://api.douban.com/v2/book/search',
  book_search_id: 'https://api.douban.com/v2/book/',
  music_search: 'https://api.douban.com/v2/music/search',
  music_search_id: 'https://api.douban.com/v2/music/',
  movie_search: 'https://api.douban.com/v2/movie/search',
  movie_search_id: 'https://api.douban.com/v2/movie/subject/'
});