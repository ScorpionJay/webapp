## 1. npm init 创建package.json

{
  "name": "demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "jay",
  "license": "MIT"
}


## 2. echo > Gruntfile.js

npm install grunt grunt-contrib-concat grunt-contrib-uglify --save-dev
npm install load-grunt-tasks --save-dev
npm install time-grunt --save-dev

npm install grunt-contrib-watch grunt-contrib-connect  --save-dev

npm install bower --save-dev
npm install grunt-bower-task --save-dev

http://gruntjs.com/sample-gruntfile
https://www.npmjs.com/package/grunt-contrib-concat
https://www.npmjs.com/package/grunt-contrib-uglify
https://www.npmjs.com/package/grunt-contrib-watch
https://www.npmjs.com/package/grunt-contrib-connect

https://www.npmjs.com/package/grunt-bower-task


## 3.bower init 创建bower.json

bower install angular angular-route --save-dev

bower list

## demo
### package.json
~~~json
{
  "name": "demo",
  "version": "1.0.0",
  "description": "demo",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "jay",
  "license": "MIT",
  "devDependencies": {
    "bower": "^1.7.9",
    "grunt": "^1.0.1",
    "grunt-bower-task": "^0.4.0",
    "grunt-contrib-concat": "^1.0.0",
    "grunt-contrib-connect": "^1.0.1",
    "grunt-contrib-uglify": "^1.0.1",
    "grunt-contrib-watch": "^1.0.0",
    "load-grunt-tasks": "^3.4.1",
    "time-grunt": "^1.3.0"
  }
}

~~~

### gruntfile.js
~~~js
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
			          targetDir: 'app/lib',
			          layout: 'byType' ,
			          install: true,
			          verbose: false,
			          cleanTargetDir: true,
			          cleanBowerDir: false,
			          bowerOptions: {}
			        }
			      }
			 }




	});


  	grunt.registerTask('default', ['uglify','concat']);

  	grunt.registerTask('serve', [ 'connect:server','watch']);

  	grunt.registerTask('b', [ 'bower']);

};
~~~

### bower.js
~~~json
{
  "name": "demo",
  "description": "demo",
  "main": "index.js",
  "authors": [
    "jay"
  ],
  "license": "MIT",
  "moduleType": [],
  "homepage": "",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ],
  "devDependencies": {
    "angular": "^1.5.3",
    "angular-route": "^1.5.3",
    "bootstrap": "^3.3.6"
  }
}
~~~
