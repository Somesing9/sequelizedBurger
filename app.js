var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, 'public')));

app.engine(".hbs", exphbs({defaultLayout: "main", extname: '.hbs'}));
app.set("view engine", ".hbs");


var index = require('./routes/index');
app.use('/', index);

var db = require("./models");

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});