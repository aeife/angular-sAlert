module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
          main: {
            src: 'src/alert.js',
            dest: 'dist/alert.js',
          },
        },
        uglify: {
            options: {
                banner: [
                    '/*!',
                    ' * @name        <%= pkg.name %>',
                    ' * @author      <%= pkg.author %>',
                    ' * @modified    <%= grunt.template.today("dddd, mmmm dS, yyyy") %>',
                    ' * @version     <%= pkg.version %>',
                    ' */'
                ].join('\n'),
                compress: {
                    drop_console: true
                }
            },
            dist: {
                files: [
                    {
                        src: 'dist/alert.js',
                        dest: 'dist/alert.js'
                    }
                ]
            }
        },
        jshint: {
            all: ['src/**/*.js'],
            options: {
                jshintrc: true
            }
        },
        ngtemplates: {
            alert: {
                src: 'src/alert.html',
                dest: 'dist/alert.js',
                options: {
                    append: true
                }
            }
        },
        less: {
            development: {
                options: {
                    compress: true
                },
                files: {
                    "dist/alert.css": "src/alert.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-angular-templates');

    grunt.registerTask('default', ['jshint', 'copy', 'ngtemplates', 'uglify', 'less']);

};