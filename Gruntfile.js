'use strict';
var LIVERELOAD_PORT = 35729;
var SERVER_PORT = 3000;
var path = require('path');

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var yeomanConfig = {
        server: 'server',
        dist: '.nuxt',
        project_dist: 'pack_dist'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            options: {
                nospawn: true,
                livereload: LIVERELOAD_PORT
            },
            express: {
                files:  [ 'server/**/*.js' ],
                tasks:  [ "express:dev" ],
                options: {
                    spawn: false
                }
            }
        },
        express: {
            dev: {
                options: {
                    script: 'server/app.js',
                    port: SERVER_PORT,
                    debug: false
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:'+SERVER_PORT+'/index.html'
            }
        },
        clean: {
            dist: [yeomanConfig.project_dist]
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.dist %>/dist',
                    dest: '<%= yeoman.project_dist %>/<%= yeoman.dist %>/dist',
                    src: [
                        '**/*.*',
                    ]
                },{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.server %>',
                    dest: '<%= yeoman.project_dist %>/<%= yeoman.server%>',
                    src: [
                        '**/*.*'
                    ]
                },{
                    expand: true,
                    dot: true,
                    dest: '<%= yeoman.project_dist%>',
                    src: [
                        'nuxt.config.js',
                        'package.json'
                    ]
                }]
            }
        }
    });


    grunt.registerTask('server', function (target) {
        grunt.task.run(['serve' + (target ? ':' + target : '')]);
    });

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open:server']);
        }

        grunt.task.run([
            'express:dev',
            'watch',
            'open'
        ]);
    });

    grunt.registerTask('build', [
        'clean:dist',
        'copy'
    ]);
};
