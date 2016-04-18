define(['angular','resource'],function(){

	'use strict';

	var module = angular.module('app.service', ['ngResource']);
	
	module.factory('HttpService', ['$q','$http','$rootScope',function($q, $http,$rootScope) {

				var httpService = {};
				 
				httpService.querywithParams = function(url,params) {
					$rootScope.isLoading = true;
					var deferred = $q.defer();
					$http({
						method : 'jsonp',
						url : url,
						params:params,
//                        headers: {
//							"Content-Type": "application/json;charset=UTF-8",
//							"X-Requested-With": "XMLHttpRequest"
//						}
					}).success(function(data, status, headers, config) {
						deferred.resolve(data);
					}).error(function(reason, status, headers, config) {
						deferred.reject(reason);
					});
					$rootScope.isLoading = false;
					return deferred.promise;
				};
					
				// basic
				httpService.query = function(method,url,params,data) {
					var deferred = $q.defer();
					$http({
						method : method,
						url : url,
						params:params,
						data:data,
						timeout:60000,
                        headers: {
							"Content-Type": "application/json;charset=UTF-8",
							"X-Requested-With": "XMLHttpRequest"
						}
					}).success(function(data, status, headers, config) {
						deferred.resolve(data);
					}).error(function(reason, status, headers, config) {
						console.log(status);
						if(status === 404){
							window.location.href="#~/error/"+status;
						}else if(status==403){	

						}else if(status===310){
//							window.location.href="#~/profile";
						}
						deferred.reject(reason);
					});
					return deferred.promise;
				};
				
				// get
				httpService.get = function(url,params) {
					return httpService.query('get',url,params);
				};
				
				// post
				httpService.post = function(url,data) {
					return httpService.query('post',url,null,data);
				};
				
				
				return httpService;

	} ]);

});// end for define

