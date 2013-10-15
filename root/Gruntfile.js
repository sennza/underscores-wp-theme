module.exports = function( grunt ) {

	// Project configuration
	grunt.initConfig( {
		pkg:    grunt.file.readJSON( 'package.json' ),
		concat: {
			options: {
				stripBanners: true
			},
			underscores_wp_theme: {
				src: [
					'js/src/customizer.js'
				],
				dest: 'js/customizer.js'
			}
		},
		jshint: {
			all: [
				'Gruntfile.js',
				'js/src/**/*.js'
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
					module:  false
				}
			}		
		},
		uglify: {
			all: {
				files: {
					'js/customizer.js.min.js': ['js/customizer.js']
				},
				options: {
					mangle: {
						except: ['jQuery']
					}
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
				files: ['js/src/**/*.js', 'js/vendor/**/*.js'],
				tasks: ['jshint', 'concat', 'uglify'],
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
	
	// Load other tasks
	grunt.loadNpmTasks( 'grunt-contrib-compass' );
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	
	// Default task.
	grunt.registerTask( 'default', ['jshint', 'compass', 'concat', 'uglify', 'cssmin'] );
	// TODO: Configure build
	// grunt.registerTask( 'build', ['default'] );

	grunt.util.linefeed = '\n';
};