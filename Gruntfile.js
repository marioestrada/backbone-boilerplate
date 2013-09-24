module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
    
    // retrieve the current hash of the latest commit
    shell: {
      git: {
        command: 'git rev-parse --short origin/master',
        options: {
          callback: function(err, stdout, stderr, cb) {
            gitHash = stdout;
            cb();
          }
        }        
      }
    },
    
    // optimize the js + templates
    requirejs: {
      compile: {
        options: {
          name: "config",
          baseUrl: "app/js",
          mainConfigFile: "app/js/config.js",
          out: "build/js/optimized.min.js",
          optimize: "uglify",
          preserveLicenseComments: false
        }
      }
    },
    
    // concat js files
    concat: {
      options: {
        separator: ';',
        // Generate the version and date banner
        banner: '/*!\n' +
                'hash: <%= gitHash %>' + 
                'date: <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '*/\n'
      },
      js: {
        src: [
          'app/js/vendor/require-2.1.5.min.js', 
          'build/js/optimized.min.js'
        ],
        dest: 'build/js/app.min.js'
      },
    },
    
    // minify css
    cssmin: {
      minify: {
        files: {
          "build/css/app.min.css": [
            'app/css/bootstrap/css/bootstrap.min.css', 
            'app/css/bootstrap/css/bootstrap-responsive.min.css', 
            'app/css/app.css'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-shell');
  
  grunt.task.registerTask('clean', 'Clean up generated files.', function() {
    grunt.file.delete("build/js/optimized.min.js");
  });

  // grabs the git hash
  // optimizes and uglifies
  // concats banner, require.js and optimized file
  // cleans up the generated files
  grunt.registerTask('default', ['shell:git', 'requirejs:compile', 'concat:js', 'cssmin:minify', 'clean']);

};