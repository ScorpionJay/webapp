require.config({

	baseUrl:'.',

	paths:{
		jquery:'lib/jquery/jquery',
		angular:'lib/angular/angular',
		route:'lib/angular-route/angular-route'
	},

	shim:{
		'route':{
			deps:['angular']
		}
	},

});

require(['jquery','angular','js/common/app'],function(){

	console.log('load end');
	console.log('jquery version: ' + $.fn.jquery);
	console.log('angular version: ' + angular.version.full);

	angular.bootstrap(document,['App']);

});