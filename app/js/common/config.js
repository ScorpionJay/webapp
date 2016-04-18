define(['angular'],function(){

 	angular.module('Config', []).constant('Config', {
			book_search: 'https://api.douban.com/v2/book/search',
			book_search_id: 'https://api.douban.com/v2/book/',
			music_search: 'https://api.douban.com/v2/music/search',
			music_search_id: 'https://api.douban.com/v2/music/',
			movie_search: 'https://api.douban.com/v2/movie/search',
			movie_search_id: 'https://api.douban.com/v2/movie/subject/'
	});

});