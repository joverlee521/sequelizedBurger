var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var path = require("path");
app.use(express.static(path.join(__dirname, "/public")));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = require("./controllers/burgers_controller");
app.use(router);

var db = require("./models");

db.sequelize.sync({force: true}).then(function(){
    app.listen(PORT, function(){
        console.log("Server is listening on: http://localhost:" + PORT);
    });
});
