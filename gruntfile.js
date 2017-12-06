module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                mangle: true,
                report: 'gzip',
                compress: {
                    drop_console: true
                }
            },
            home: {
                files: {
                    './build/messager.min.js' : [
                        './src/messager.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('compile', ['uglify']);
}
