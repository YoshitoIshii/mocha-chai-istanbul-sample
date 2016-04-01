module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mocha_istanbul: {
            coverage: {
                src: 'test',
                options: {
                    //mask: '*.spec.js',
                    //mochaOptions: ['--harmony', '--async-only'],
                    //istanbulOptions: ['--harmony', '--handle-siging'],
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-mocha-istanbul');
    grunt.registerTask('default', ['mocha_istanbul:coverage']);
}
