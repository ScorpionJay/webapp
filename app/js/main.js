requirejs.config({

    baseUrl: 'js/',

    paths: {
        angular:'lib/angular/angular'
        ,route:'lib/angular-ui-router/angular-ui-router'
        ,resource:'lib/angular-resource/angular-resource'
        ,util:'util'
        ,IScroll:'lib/iscroll/build/iscroll'
        ,config:'common/config'
        ,app:'common/app'
        ,bootstrap:'lib/bootstrap/bootstrap'
        ,jquery:'lib/jquery/jquery'
    },
    shim:{
    	route: {
            deps: ['angular'],
        },
        resource: {
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
        },
        bootstrap:{
            deps:['jquery']
        }
    }

});


requirejs(['angular','app','jquery','bootstrap'],
function   (angular,App) {
	angular.bootstrap(document, ['App']);
    // 禁止右键
    document.oncontextmenu = function(){
        return false;
    };
    document.ondragstart=function(){"return false"} //禁止鼠标拖动
    document.onselectstart=function(){"return false"}//禁止选中文字
});