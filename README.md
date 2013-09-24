backbone-boilerplate
====================

###Getting Started

Install <a href="http://nodejs.org/">node.js</a>

Install the grunt-cli tool

    npm install -g grunt-cli

Install project dependencies

    npm install

Running the local server

    node server.js

The static files under `app/` will be served from <a href="http://localhost:3001/">http://localhost:3001/</a>


###Packaging and deployment

Execute grunt to generate minified and concatenated js and css files in `build/`

    grunt
    
An additional task for grunt-s3 is available to also deploy the static assets to a S3 bucket.


###Package Structure

`server.js` is a simple node express server that serves up the files via localhost in order to support CORS and browser security policies.

`package.json` is the package definition that specifies all the npm dependencies for Grunt.

`Gruntfile.js` is the grunt file used to define tasks, specifically packaging and deployment for this project.

`app/css/` is where CSS files should go.  This includes bootstrap, flat-ui, css customizations, etc.

`app/js/vendor/` is for third-party javascript libraries and files.

`app/js/models/` is where Backbone Models should be saved.

`app/js/collections/` is where Backbone Collections should be saved.

`app/js/views/` is where Backbone Views should be saved.

`app/js/views/templates/` is where html templates should be saved.

`app/js/AppData.js` is a global data manager that holds references to the Router and Collections, etc.

`app/js/App.js` is the root level application.

`app/js/config.js` defines the Require.js configuration, including third-party vendor references and dependencies.

`app/js/Router.js` is the Backbone Router that handles primary application routing.
