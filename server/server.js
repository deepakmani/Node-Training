// TestUser 


var express    		= require('express');
var app        		= express();
var morgan     		= require('morgan'); 						// For logging to console
var bodyParser 		= require('body-parser'); 					// Pull info from html POST in req.body


var port = process.env.PORT || 7000;

// Require routes
require("./routes.js")(app);

// listen (start app with node server.js)
var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Server is running on Port", port);

}); // Express server

       




