
		var express = require("express");
		var bodyParser = require("body-parser");
		var methodOverride = require('method-override')
		var mysql = require("mysql2")

		// Express set up

		var app = express();
		var PORT = process.env.PORT || 3000;

		// Serve static content for the app from the "public" directory
		app.use(express.static("./public"));

		// Requiring our models for syncing
		var db = require(__dirname + '/models');

		// parse application/x-www-form-urlencoded
		app.use(bodyParser.urlencoded({ extended: false }));

		// parse application/json
		app.use(bodyParser.json());

		// Set Handlebars.
		var exphbs = require("express-handlebars");
		app.engine("handlebars", exphbs({ defaultLayout: "main" }));
		app.set("view engine", "handlebars");

		// Import routes and give the server access to them.
		var router = require("./controllers/Projects2Routes.js");
		app.use('/',router);				

		// Syncing our sequelize models and then starting our express app
		db.sequelize.sync({ force: false })
			.then(function() {
		  		app.listen(PORT, function() {
		    	console.log("App listening on PORT " + PORT);
		  });
		});
