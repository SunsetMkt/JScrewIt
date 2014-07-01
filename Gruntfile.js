/* global module: false */
module.exports =
    function (grunt)
    {
        // Project configuration.
        grunt.initConfig(
            {
                // Task configuration.
                jasmine_node:
                {
                    options:
                    {
                        forceExit: true
                    },
                    all: ['jasmine/']
                },
                jshint:
                {
                    options:
                    {
                        curly: true,
                        eqeqeq: true,
                        immed: true,
                        newcap: true,
                        noarg: true,
                        quotmark: true,
                        trailing: true,
                        undef: true,
                        unused: true,
                        
                        boss: true,
                        eqnull: true,
                        evil: true,
                        sub: true,
                        validthis: true,
                        
                        node: true,
                        globals:
                        {
                            window: true,
                        }
                    },
                    gruntfile:
                    {
                        src: 'Gruntfile.js'
                    },
                    lib_test:
                    {
                        src: ['jasmine/**/*.js', 'jscrewit.js', 'test/**/*.js']
                    }
                },
                nodeunit:
                {
                    files: ['test/**/*_test.js']
                },
                watch:
                {
                    gruntfile:
                    {
                        files: '<%= jshint.gruntfile.src %>',
                        tasks: ['jshint:gruntfile']
                    },
                    lib_test:
                    {
                        files: '<%= jshint.lib_test.src %>',
                        tasks: ['jshint:lib_test', 'nodeunit']
                    }
                }
            }
        );

        // These plugins provide necessary tasks.
        grunt.loadNpmTasks('grunt-contrib-nodeunit');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-jasmine-node');

        // Default task.
        grunt.registerTask('default', ['jshint', 'nodeunit', 'jasmine_node']);

    };
