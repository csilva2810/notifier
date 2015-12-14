module.exports = function(grunt) {
	'use strict';
 
	// configuração do projeto
	var gruntConfig = {
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
            options: {
              mangle: false
            },
            my_target: {
              files: {
                'dist/js/notifier.min.js': ['js/notifier.js']
              }
            }
        },
		cssmin: {
			dist: {
				src: ['css/notifier.css'],
				dest: 'dist/css/notifier.min.css'
			}
		}
	};
 
	grunt.initConfig(gruntConfig);
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
 
	grunt.registerTask('default', ['uglify', 'cssmin']);
};