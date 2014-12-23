module.exports = (grunt) ->
  grunt.initConfig
    staticHandlebars:
      options:
      	partials: ""
      	helpers: ""

      simpleTarget:

      # Target-specific file lists and/or options go here.
        options:
      	  json: "index.json"

        files:
      	  "index.html": "index.handlebars"
 
    grunt.loadNpmTasks 'grunt-static-handlebars'
    grunt.registerTask 'default', 'This is the default task', 'staticHandlebars'
