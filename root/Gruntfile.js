module.exports = function( grunt ) {
	'use strict';

	// Load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Project configuration
	grunt.initConfig( {
		pkg:    grunt.file.readJSON( 'package.json' ),
		jshint: {
			all: [
				'Gruntfile.js',
				'js/**/*.js'
			],
			options: {
				curly:   true,
				eqeqeq:  true,
				immed:   true,
				latedef: true,
				newcap:  true,
				noarg:   true,
				sub:     true,
				undef:   true,
				boss:    true,
				eqnull:  true,
				globals: {
					exports: true,
					module:  false,
					"jQuery": true,
					"wp": true,
					"require": true,
					"document": true,
					"window": true,
					"location": true,
					"navigator": true
				}
			}		
		},
		cssmin: {
			minify: {
				expand: true,
				src: ['style.css'],
				ext: '.css'
			}
		},
		cssjanus: {
			options: {
				swapLtrRtlInUrl: false
			},
			src: [
				'style.css'
			],
			dest: 'rtl.css'
		},
		watch:  {
			sass: {
				files: ['sass/**/*.scss'],
				tasks: ['compass'],
				options: {
					debounceDelay: 500
				}
			},
			compass: {
				files: ['sass/*.scss'],
				tasks: ['compass:dev']
			},
			scripts: {
				files: ['js/**/*.js'],
				tasks: ['jshint', 'uglify'],
				options: {
					debounceDelay: 500
				}
			}
		},
		compass: {
			dev: {
				options: {
					sassDir: 'sass',
					cssDir: '.'
				}
			}
		}
	});
	
	// Default task.
	grunt.registerTask( 'default', ['compass', 'cssmin', 'cssjanus', 'jshint'] );
	grunt.registerTask( 'watch', [ 'compass', 'cssmin', 'cssjanus'] );
	// grunt.registerTask( 'build', ['default'] );

	grunt.util.linefeed = '\n';
};