define(['angular','IScroll'],function(angular,IScroll){

	var module = angular.module('app.directive', ['ui.router']);

	module.directive('ngScroll', function() {
	    return {
			replace: false,
			restrict: 'A',
	        link: function(scope, element, attr){
	            scope.$watch(attr.ngScroll, function(value){
					new IScroll(document.querySelector('#wrapper'), {
		   	      	  snap: true,
		   	      	  momentum: true,
		   	      	  hScrollbar: true
		   	    });
	        });	
	       }
	    };
	});

});