module.exports = function(grunt) {

    // load grunt tasks automatically
  	require('load-grunt-tasks')(grunt);

  	// time how long tasks. can help when optimizing build times
 	require('time-grunt')(grunt);
	var path = require('path');

  	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// concat
		concat: {
			options: {
				separator: ';',
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
							'<%= grunt.template.today("yyyy-mm-dd") %> */ \n',
			},
			dist: {
			    src: ['src/**/*.js'],
			    dest: 'dist/built.js',
			},
		},

		// uglify
		uglify: {
			options: {
		      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
		        '<%= grunt.template.today("yyyy-mm-dd") %> */ \n'
		    },
		    my_target: {
		      files: [{
		          expand: true,
		          cwd: 'build/',
		          src: '**/*.js',
		          dest: 'build/'
		      }]
		    }
		  },

		  // html
		  htmlmin: {                                    
		      minify: {                                     
		        options: {                        
		          removeComments: true,
		          collapseWhitespace: true
		        },
		        files: [{
		          expand:true,
		          cwd:'build',
		          src:'**/*.html',
		          dest:'build'
		        }]
		      }
		    },

		 // image
		 imagemin: {                          
	      minify: {                         
	        files: [{
	          expand: true,                 
	          cwd: 'build',                   
	          src: ['**/*.{png,jpg,gif,ico}'],   
	          dest: 'build'                  
	        }]
	      }
	    },

		// watch
		watch:{
		      livereload:{
		    		options:{
		    			livereload:'<%= connect.options.livereload %>' //this port must be same with the connect livereload port
		    		},
		    		// watch files
		    		files:[
		    			'app/**/*.*'
		    		]
				}
		},	

		// connect
		connect:{
			      options:{
			        livereload:35729
			      },
			      server:{
			        options:{
			           port:9000,
			           hostname:'localhost',
			           open:true,// auto open default bowser
			           base:'./'
			        }
			      }
		},


		// bower
		bower: {
			      install: {
			        options: {
			          targetDir: 'app/lib',
			          layout: 'byType' ,
			          install: true,
			          verbose: false,
			          cleanTargetDir: true,
			          cleanBowerDir: false,
			          bowerOptions: {}
			        }
			      }
		},
			
		// requirejs
		requirejs: {
			build:{
				options:{
						appDir: './app',
						dir: './build',
						baseUrl: '.',
						optimizeCss: "standard",
						logLevel: 0,
						writeBuildTxt: true,
						optimize: "uglify2",
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
					    },
						 modules: [{
							name: 'main'
						}]
				}
			}
		}



	});


  	grunt.registerTask('default', ['uglify','concat']);

  	grunt.registerTask('serve', [ 'connect:server','watch']);

  	grunt.registerTask('b', [ 'bower']);
	
	grunt.registerTask('r', [ 'requirejs']);

	grunt.registerTask('html', [ 'htmlmin']);

	grunt.registerTask('image', [ 'imagemin']);

	grunt.registerTask('build', [ 'html','image','uglify']);

};