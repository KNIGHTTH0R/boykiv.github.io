module.exports = function(grunt) {
	require('jit-grunt')(grunt);
	
	grunt.initConfig({
		less: {
			development: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: {
					"css/styles.css": "less/styles.less"
				}
			}
		},
		watch: {
			less: {
				files: ['less/*.less'],
				tasks: 'less'
			},
			reload: {
				files: ['*.html',
					'css/styles.css',
					'js/*.js'],
			tasks: 'reload'
			}
		}
	});
	
	grunt.registerTask('default', ['less', 'watch']);
	grunt.loadNpmTasks('grunt-contrib-watch');
};