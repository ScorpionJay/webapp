define(['angular'],function(angular){

	var module = angular.module('app.fillter', []);

	module.filter('wordSub', function() {
	   return function(val,num){
		   	if(val){
				return val.length > num ? val.substring(0,num) + '...' : val;
		   	}
	   		
	   };
	});


});