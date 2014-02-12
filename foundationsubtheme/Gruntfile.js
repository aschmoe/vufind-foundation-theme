'use strict';
var path = require('path');
//var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var folderMount = function folderMount(connect, point) {
  return connect.static(path.resolve(point));
};

module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    // Configuration to be run (and then tested)
    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: ['s*ss/{,**/}*.s*ss'],
        tasks: ['compass:dist']
      },
      js: {
        files: [
          'js/{,**/}*.js',
          '!js/{,**/}*.min.js'
        ],
        tasks: [
          'jshint',
        ]
      },
      ie: {
        files: ['css/*.css', '!css/ie*.css'],
        tasks: [
          'stripmq'
        ]
      },
    },
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'js/{,**/}*.js',
        '!js/{,**/}*.min.js'
      ]
    },
    stripmq: {
      options: {
        stripBase: true,
        minWidth: 641,
        maxWidth: 1280
      },
      files: {
        src: [
          'css/custom.css',
        ],
        dest: 'css/ie-mq.css'
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-stripmq');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['watch', 'stripmq', 'compass', 'jshint']);
};

