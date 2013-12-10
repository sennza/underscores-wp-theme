module.exports = function( grunt ) {

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
					module:  false
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
	grunt.registerTask( 'default', ['jshint', 'compass', 'cssmin'] );
	// TODO: Configure build
	// grunt.registerTask( 'build', ['default'] );

	grunt.util.linefeed = '\n';
};