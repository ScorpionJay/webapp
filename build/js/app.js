define(["angular","route","IScroll"],function(o,e,t){var r=o.module("app",["ui.router"]);r.config(["$stateProvider","$urlRouterProvider",function(o,e){e.otherwise("/book"),o.state("book",{url:"/book",views:{header:{templateUrl:"view/header.html"},container:{templateUrl:"view/bookList.html",controller:"bookController",reloadOnSearch:!1},footer:{templateUrl:"view/footer.html"}}}).state("bookDetail",{url:"/books/:id",views:{header:{templateUrl:"view/headerBack.html"},container:{templateUrl:"view/bookDetail.html",controller:"bookDetailController"},footer:{templateUrl:"view/footer.html"}}}).state("movice",{url:"/movice",views:{header:{templateUrl:"view/header.html"},container:{templateUrl:"view/moviceList.html",controller:"moviceController"},footer:{templateUrl:"view/footer.html"}}}).state("music",{url:"/music",views:{header:{templateUrl:""},container:{templateUrl:"view/musicList.html",controller:"musicController"},footer:{templateUrl:"view/footer.html"}}})}]),r.constant("Config",{book_search:"https://api.douban.com/v2/book/search",book_search_id:"https://api.douban.com/v2/book/",music_search:"https://api.douban.com/v2/music/search",music_search_id:"https://api.douban.com/v2/music/",movie_search:"https://api.douban.com/v2/movie/search",movie_search_id:"https://api.douban.com/v2/movie/subject/"}),r.run(["$rootScope","$state","$stateParams",function(o,e,t){o.$state=e,o.$stateParams=t,o.$on("$stateChangeSuccess",function(e,t,r,a,l){o.previousState_name=a.name,o.previousState_params=l}),o.back=function(){e.go(o.previousState_name,o.previousState_params)}}]),r.controller("bookController",["$rootScope","$scope","Config","$http",function(o,e,r,a){console.log("bookController"),console.log(r.book_search);var l="angular";a.jsonp(r.book_search+"?callback=searchBookList&count=10&q="+l),window.searchBookList=function(r){console.log(r),r.books.length&&(o.isNoLoaded=!1);for(var a=[],l=0;l<r.books.length;l++){var i=r.books[l],c={id:i.id,image:i.image,origin_title:i.title||"书名未共享",author:i.author[0]||"作者未知",publisher:i.publisher||"出版社未知",price:i.price.split(".")[0]||"未知",pages:i.pages};a.push(c)}e.data=a;var n=document.getElementById("wrapper");console.log(n);new t(n)},e.data=[];for(var i=0;10>i;i++)e.data.push({id:i,name:"jay"+i});e.search=function(){""==e.keyword||void 0==e.keyword?o.bookList={}:a.jsonp(r.book_search+"?callback=searchBookList&count=10&q="+e.keyword)}}]),r.controller("bookDetailController",["$scope","Config","$http","$stateParams",function(o,e,t,r){console.log(r.id),t.jsonp(e.book_search_id+r.id+"?callback=callback_bookDetail&"),window.callback_bookDetail=function(e){console.log(e),o.data=e}}]),r.controller("moviceController",function(){console.log("moviceController")}),r.controller("musicController",["$scope",function(o){console.log("musicController"),o.data=[];for(var e=0;100>e;e++)o.data.push({id:e,name:"jay"+e});var r=document.getElementById("wrapper");console.log(r);new t(r)}]),r.directive("ngScroll",function(){return{replace:!1,restrict:"A",link:function(o,e,r){o.$watch(r.ngScroll,function(o){new t(document.querySelector("#wrapper"),{snap:!0,momentum:!0,hScrollbar:!0})})}}})});