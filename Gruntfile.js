/*global module:false*/
module.exports = function(grunt) {

  // Enable Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: {
        src: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
        options: {
          curly: true,
          eqeqeq: true,
          immed: true,
          latedef: true,
          newcap: true,
          noarg: true,
          sub: true,
          undef: true,
          boss: true,
          eqnull: true,
          browser: true,
          globals: {
            jQuery: true
          }
        }
      }
    },
    pkg: grunt.file.readJSON('package.json'),
    qunit: {
      files: ['test/**/*.html']
    },
    watch: {
      scripts: {
        files: 'src/**/*.js',
        tasks: ['jshint', 'qunit']
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
          '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
          '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
          ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> \n*/\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<banner:meta.banner>', 'src/<%= pkg.name %>.js']
        }
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['jshint', 'uglify']);

  // Travis CI task
  grunt.registerTask('travis', ['jshint']);
};
