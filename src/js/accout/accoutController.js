define(['angular','util'],function(angular,util){

	console.log('accout controller');

	var homeModule = angular.module('accoutModule',['serviceModule']);

	homeModule.controller('accoutCtr',['$scope','httpService',function($scope,httpService){

		console.log('accoutCtr ...');

		$scope.money = 130012;

		util.date();

		console.log(httpService);

		httpService.get('json/test.json').then(function(data){
			console.log('success');
			console.log(data);

		},function(data){
			console.log('error');
			console.log(data);
		});

	}]);

});