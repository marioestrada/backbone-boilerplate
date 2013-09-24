backbone-boilerplate
====================

##Getting Started

Install <a href="http://nodejs.org/">node.js</a>

Install npm dependencies for the project

    npm install

Running the local server

    node server.js

The static files under `/app` will be served from <a href="http://localhost:3001/">http://localhost:3001/</a>


###Packaging and deployment

Execute grunt to generate minified and concatenated js and css files in `/build`

    grunt
    
An additional task for grunt-s3 is available to also deploy the static assets to a S3 bucket.
