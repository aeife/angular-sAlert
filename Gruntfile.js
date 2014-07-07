module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        moduleName: 'sAlert',
        copy: {
          main: {
            src: 'src/<%= moduleName %>.js',
            dest: 'dist/<%= moduleName %>.js',
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
                        src: 'dist/<%= moduleName %>.js',
                        dest: 'dist/<%= moduleName %>.js'
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
            sAlert: {
                src: 'src/<%= moduleName %>.html',
                dest: 'dist/<%= moduleName %>.js',
                options: {
                    append: true
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        less: {
            development: {
                options: {
                    compress: true
                },
                files: {
                    "dist/<%= moduleName %>.css": "src/<%= moduleName %>.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['karma', 'jshint', 'copy', 'ngtemplates', 'uglify', 'less']);

};