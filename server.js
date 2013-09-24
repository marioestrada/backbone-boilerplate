var express = require('express'),
    app = express();

// CORS middleware
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
app.use(allowCrossDomain);

//app.use(express.logger());

// serve up all static files within the /app directory
app.use( express.static(__dirname + '/app') );

app.listen(3001, function() {
  console.log('Backbone Boilerplate running on http://localhost:3001/');
});
