module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        sass: {
            options: {
                outputStyle: "compressed",
                sourceMap: true
            },
            dist: {
                files: {
                    'app/assets/css/app.css': 'app/assets/sass/app.scss'
                }
            }
        },
        connect: {
            dev: {
                options: {
                    base: 'app'
                }
            }
        },
        watch: {
            sass: {
                files: ['app/assets/sass/*.scss'],
                tasks: ['sass:dist']
            },
            livereload: {
                files: ['app/app.js', 'app/index.html', 'app/shared/**/*', 'app/components/**/*', 'app/assets/sass/*.scss'],
                options: {
                    livereload: true
                }
            }
        }
    });
    grunt.registerTask('default', ['connect', 'watch']);
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
}