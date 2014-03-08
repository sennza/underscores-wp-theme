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
				'js/**/*.js',
				'!js/**/*.min.js'
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
			dev: {
				options: {
					swapLtrRtlInUrl: false
				},
				src: ['style.css'],
				dest: 'rtl.css'
			}
		},
		uglify: {
			all: {
				files: {
					'js/customizer.min.js': 'js/customizer.js',
					'js/navigation.min.js': 'js/navigation.js',
					'js/skip-link-focus-fix.min.js': 'js/skip-link-focus-fix.js'
				},
				mangle: {
					except: ['jQuery']
				}
			}
		},
		watch:  {
			compass: {
				files: ['sass/**/*.scss'],
				tasks: ['compass:dev', 'cssjanus:dev'],
				options: {
					debounceDelay: 500,
					livereload: true
				}
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
					cssDir: '.',
					outputStyle: 'compressed'
				}
			}
		},
		imagemin: {
			build: {
				files: [{
					expand: true,                // Enable dynamic expansion
					cwd: './images/',            // Src matches are relative to this path
					src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
					dest: './images/'
				}],
				options: {
					optimizationLevel: 7
				}
			}
		}
	});
	
	// Default task.
	grunt.registerTask( 'default', [ 'compass', 'cssmin', 'cssjanus:dev', 'jshint' ] );
	// Build task
	grunt.registerTask( 'build',   [ 'cssmin', 'jshint', 'uglify', 'imagemin:build' ] );

	grunt.util.linefeed = '\n';
};