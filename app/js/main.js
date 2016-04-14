requirejs.config({

    baseUrl: 'js/',

    paths: {
        angular:'lib/angular/angular'
        ,route:'lib/angular-ui-router/angular-ui-router'
        ,util:'util'
    },
    shim:{
    	route: {
            deps: ['angular'],
        },
        angular: {
            exports: 'angular'
        },
        util: {
            exports: 'util'
        }
    }

});

// Start the main app logic.
requirejs(['angular','app'],
function   () {
	angular.bootstrap(document, ['app']);
});