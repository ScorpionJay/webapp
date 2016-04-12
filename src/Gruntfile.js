module.exports = function(grunt) {

    // load grunt tasks automatically
  	require('load-grunt-tasks')(grunt);

  	// time how long tasks. can help when optimizing build times
 	require('time-grunt')(grunt);


  	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		concat: {
		options: {
		  separator: ';',
		  banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
		    '<%= grunt.template.today("yyyy-mm-dd") %> */',
		},
		dist: {
		  src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
		  dest: 'dist/built.js',
		},
		},


	});


  	grunt.registerTask('default', ['concat']);

};