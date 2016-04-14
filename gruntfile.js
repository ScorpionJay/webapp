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
		          cwd: 'src/',
		          src: '**/*.js',
		          dest: 'dist/js'
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
			           base:['app']
			        }
			      }
		},


		// bower
		bower: {
			      install: {
			        options: {
			          targetDir: 'app/js/lib',
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
						baseUrl: 'js/',
						paths: {
							angular:'lib/angular/angular'
							,route:'lib/angular-ui-router/angular-ui-router'
							,util:'util'
							,main:'main'
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

};