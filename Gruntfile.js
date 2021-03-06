"use strict";

module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-browser-sync");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-postcss");

  grunt.initConfig({
    postcss: {
      style: {
        options: {
          processors: [
            require("precss")(),
            require("postcss-custom-media")(),
            require("postcss-media-minmax")(),
            require("autoprefixer")({browsers: [
              "last 1 version",
              "last 2 Chrome versions",
              "last 2 Firefox versions",
              "last 2 Opera versions",
              "last 2 Edge versions"
            ]})
          ]
        },
        src: "postcss/style.css",
        dest: "css/style.css"
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            "*.html",
            "css/*.css"
          ]
        },
        options: {
          server: ".",
          watchTask: true,
          notify: false,
          open: true,
          ui: false
        }
      }
    },

    watch: {
      style: {
        files: ["postcss/**/*.css"],
        tasks: ["postcss"],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.registerTask("serve", ["browserSync", "watch"]);
};
