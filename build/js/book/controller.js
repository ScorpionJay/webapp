define(["angular","common/Config","IScroll","common/service"],function(o,e,t){"use strict";var l=o.module("book.controller",["Config","app.service"]);l.controller("bookController",["$rootScope","$scope","Config","$http","HttpService",function(o,e,l,r,c){console.log("bookController"),console.log(l.book_search),e.keyword="谁的青春不迷茫",window.searchBookList=function(l){console.log(l),l.books.length&&(o.isNoLoaded=!1);for(var r=[],c=0;c<l.books.length;c++){var n=l.books[c],s={id:n.id,image:n.image,origin_title:n.title||"书名未共享",author:n.author[0]||"作者未知",publisher:n.publisher||"出版社未知",price:n.price.split(".")[0]||"未知",pages:n.pages};r.push(s)}e.data=r;var i=document.getElementById("wrapper");console.log(i);var a=new t(i,{click:!0,mouseWheel:!0,dataset:e.search,cacheSize:1e3});setTimeout(function(){a.refresh()},0),a.on("scrollEnd",function(){console.log("end scroll..."),0===this.y?$("#msg").modal():100===this.y,setTimeout(function(){a.refresh()},0)}),a.on("scrollStart",function(){console.log("start scroll...")})},e.search=function(){""==e.keyword||void 0==e.keyword?o.bookList={}:c.querywithParams(l.book_search+"?callback=searchBookList&count=10&q="+e.keyword)},e.search()}]),l.controller("bookDetailController",["$scope","Config","$http","$stateParams",function(o,e,l,r){console.log(r.id),l.jsonp(e.book_search_id+r.id+"?callback=callback_bookDetail&"),window.callback_bookDetail=function(e){console.log(e),o.data=e;var l=document.getElementById("wrapper");console.log(l);var r=new t(l);setTimeout(function(){r.refresh()},0)}}])});