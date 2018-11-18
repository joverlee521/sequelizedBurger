// External Dependencies
var express = require("express");
var path = require("path");
var exphbs = require("express-handlebars");

// Setting up the express app
var app = express();
var PORT = process.env.PORT || 8080;

// Middleware to handle data parsing in express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static(path.join(__dirname, "/public")));

// Middleware to set up handlebars for express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
var router = require("./controllers/burgers_controller");
app.use(router);

// Requiring models for syncing
var db = require("./models");

// Sync sequelize models and start app
db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("Server is listening on: http://localhost:" + PORT);
    });
});
