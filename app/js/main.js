requirejs.config({

    baseUrl: 'js/',

    paths: {
        angular:'lib/angular/angular'
        ,route:'lib/angular-ui-router/angular-ui-router'
        ,util:'util'
        ,IScroll:'lib/iscroll/build/iscroll'
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
        },
        IScroll: {
            exports: 'IScroll'
        }
    }

});

// Start the main app logic.
requirejs(['angular','app','IScroll'],
function   (angular,app,IScroll) {
	angular.bootstrap(document, ['app']);



// var myScroll;

// function loaded () {
//     myScroll = new IScroll('#wrapper', { mouseWheel: true });
// }

// document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

});