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
		},
		
		jshint: {
      all: ['Gruntfile.js', 'js/notifier.js']
    },
    
    copy: {
      main: {
        files: [
          { flatten: true, src: ['dist/js/notifier.min.js'],   dest: 'demo/js/notifier.min.js'  },
          { flatten: true, src: ['dist/css/notifier.min.css'], dest: 'demo/css/notifier.min.css' }
        ]
      }
    }
    
	};
 
	grunt.initConfig(gruntConfig);
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-copy');
 
	grunt.registerTask('build', ['uglify', 'cssmin', 'copy']);
	grunt.registerTask('test', ['jshint']);
};