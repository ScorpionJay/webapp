var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
// For any unmatched url, redirect to /state1
$urlRouterProvider.otherwise("/book");
// Now set up the states
$stateProvider
  .state('book_list', {
    url: "/book",
    views:{
      header:{templateUrl:'view/header.html'},
      container:{
        templateUrl:'view/bookList.html',
        controller:'bookController'
      },
      footer:{templateUrl:'view/footer.html'}
    }
  })
  .state('book_detail', {
    url: "/book/:id",
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
        templateUrl:'movice/container.html',
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
        templateUrl:'music/container.html',
        controller:'musicController'
      },
      footer:{templateUrl:'view/footer.html'}
    }
  });
});

// Constant
myApp.constant('Config', {
  book_search: 'https://api.douban.com/v2/book/search',
  book_search_id: 'https://api.douban.com/v2/book/',
  music_search: 'https://api.douban.com/v2/music/search',
  music_search_id: 'https://api.douban.com/v2/music/',
  movie_search: 'https://api.douban.com/v2/movie/search',
  movie_search_id: 'https://api.douban.com/v2/movie/subject/'
});

// book controller
myApp.controller('bookController',function($rootScope,$scope,Config,$http){
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
        $scope.bookList = list;
        console.log($scope.bookList);
  };

  $scope.search = function(){
    $http.jsonp(Config.book_search + '?callback=searchBookList&count=10&q=' + $scope.keyword);
  };

});

// book detail controller
myApp.controller('bookDetailController',function($scope,Config,$http,$stateParams){
  console.log($stateParams.id);
  $http.jsonp( Config.book_search_id + $stateParams.id +'?callback=callback_bookDetail&' );
  window.callback_bookDetail = function(data){
    console.log(data);
    $scope.data = data;
  };

});

myApp.controller('moviceController',function(){
  console.log('moviceController');
});

myApp.controller('musicController',function(){
  console.log('musicController');
});