requirejs.config({

    baseUrl: '.',

    paths: {
        angular:'lib/angular/angular'
        ,route:'lib/angular-ui-router/angular-ui-router'
        ,resource:'lib/angular-resource/angular-resource'
        ,animate:'lib/angular-animate/angular-animate'
        ,IScroll:'lib/iscroll/build/iscroll'
        ,bootstrap:'lib/bootstrap/bootstrap'
        ,jquery:'lib/jquery/jquery'
        ,app:'js/common/app'
        ,config:'js/common/config'
        ,service:'js/common/service'
        ,fillter:'js/common/fillter'
        ,util:'js/util'
        ,main:'js/main'
    },
    shim:{
    	route: {
            deps: ['angular'],
        },
        resource: {
            deps: ['angular'],
        },
        animate: {
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